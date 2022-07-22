import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onFeedback}) => {
   const keys = Object.values(options);
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
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
}