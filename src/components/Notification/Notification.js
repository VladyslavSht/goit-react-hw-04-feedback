import PropTypes from 'prop-types';
import s from './Notification.module.css';
function Notification({ message }) {
  return (
    <div>
      <p className={s.notify}>{message}</p>
    </div>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
