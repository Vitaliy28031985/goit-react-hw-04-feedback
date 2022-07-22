import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return (
   <>
   <ul className={s.conteiner}>
      <li className={s.text}>Good: {good}</li>
      <li className={s.text}>Neutral: {neutral}</li>
      <li className={s.text}>Bad: {bad}</li>
      <li className={s.text}>Total:{total}</li>
      <li className={s.text}>Positive feedback: {positivePercentage} %</li>
   </ul>
</>
)
}

Statistics.prototype = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
};