import css from './Stat.module.css';

const Stat = ({ data }) => {
  return data.map(({ id, label, percentage }) => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return (
      <li
        key={id}
        className={css.item}
        style={{
          backgroundColor: `#${color}`,
          width: `calc(100% / ${data.length})`,
        }}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
  });
};

export default Stat;
