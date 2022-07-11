// export const FeedbackOptions = ({ oNgood, oNneutral, ONbad }) => {
//   return (
//     <>
//       <button type="button" onClick={oNgood}>
//         good
//       </button>
//       <button type="button" onClick={oNneutral}>
//         neutral
//       </button>
//       <button type="button" onClick={ONbad}>
//         bad
//       </button>
//     </>
//   );
// };

import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => {
    return (
      <button key={btn} type="button" onClick={onLeaveFeedback} name={btn}>
        {btn}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
