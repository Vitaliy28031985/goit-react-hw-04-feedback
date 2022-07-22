import PropTypes from 'prop-types';
import s from './Notification.module.css';


export const Notification = ({message}) => {
return (<p className={s.text}>{message}</p>
);};

Notification.prototype = {
   message: PropTypes.string.isRequired,
}