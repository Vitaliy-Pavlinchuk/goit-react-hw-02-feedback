import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => {
    return (
      <button
        className={styles.btn}
        key={btn}
        type="button"
        onClick={onLeaveFeedback}
        name={btn}
      >
        {btn}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
