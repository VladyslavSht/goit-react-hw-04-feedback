import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
function FeedbackOptions({ options, OnLeaveFeedback }) {
  return (
    <div>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              className={s.button}
              onClick={() => OnLeaveFeedback(option)}
            >
              {option[0].toUpperCase() + option.slice(1, option.length)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  OnLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
