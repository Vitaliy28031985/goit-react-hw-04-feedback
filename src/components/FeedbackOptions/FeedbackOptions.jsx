import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onFeedback}) => {
const keys = Object.keys(options);
return (
   
   <div className={s.conteiner}>
      {keys.map(key => (<button className={s.button}      
      type="button"
      data-feedback={key}
      onClick={onFeedback}
      key={key}
      >{key}</button>))}
   </div>
)
}

FeedbackOptions.prototype = {
onFeedback: PropTypes.func.isRequired,
options: PropTypes.arrayOf(
PropTypes.shape({
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
    }),
  ),
}