import css from './Statistics.module.css';
import Stat from './Stat';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title__list}>{title}</h2>}
      <ul className={css.stat}>
        <Stat data={stats} />
      </ul>
    </section>
  );
};

export default Statistics;
