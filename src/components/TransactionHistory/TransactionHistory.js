import css from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
