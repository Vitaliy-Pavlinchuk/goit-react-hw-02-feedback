export const FeedbackOptions = ({ oNgood, oNneutral, ONbad }) => {
  return (
    <>
      <button type="button" onClick={oNgood}>
        good
      </button>
      <button type="button" onClick={oNneutral}>
        neutral
      </button>
      <button type="button" onClick={ONbad}>
        bad
      </button>
    </>
  );
};
