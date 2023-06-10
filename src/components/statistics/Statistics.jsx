import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              style={{ backgroundColor: getBgColor(stats.length) }}
              className={css.item}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};

function getBgColor(max) {
  const colorIndex = Math.floor(Math.random() * max);
  switch (colorIndex) {
    case 0:
      return '#F7DC6F';
    case 1:
      return '#1ABC9C';
    case 2:
      return '#DAF7A6';
    case 3:
      return '#FFC300';
    case 4:
      return '#FF5733';
    case 5:
      return '#C70039';
    default:
      throw new Error(`The stats have too many elements.`);
  }
}
