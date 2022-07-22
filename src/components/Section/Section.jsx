import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({title, children}) => {
   return (
<div className={s.conteiner}>
   <h2>{title}</h2>
   {children}
</div>
   );
};

Section.prototype = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
}