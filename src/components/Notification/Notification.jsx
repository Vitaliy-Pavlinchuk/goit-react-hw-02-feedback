import PropTypes from 'prop-types';
import style from './style.module.css';

export const Notification = ({ message }) => {
  return <h2 className={style.notification}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
