import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import getRandomHexColor from 'utils/randomColor';

const {
  statistics,
  title: cssTitle,
  statList,
  item,
  label: cssLabel,
  percentage: cssPercentage,
} = css;

export default function Statistics({ stats, title }) {
  return (
    <section className={statistics}>
      {title && <h2 className={cssTitle}>{title}</h2>}
      <ul className={statList}>
        {stats.map(({ id, label, percentage }) => {
          const bgColor = getRandomHexColor();
          return (
            <li
              className={item}
              key={id}
              style={{ backgroundColor: `${bgColor}` }}
            >
              <span className={cssLabel}>{label}</span>
              <span className={cssPercentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
