function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  const lastQuestion = index === numQuestions - 1;

  return (
    <div
      className="btn btn-ui"
      onClick={() =>
        lastQuestion
          ? dispatch({ type: "finish" })
          : dispatch({ type: "nextQuestion" })
      }
    >
      {lastQuestion ? "Finish" : "Next"}
    </div>
  );
}

export default NextButton;
