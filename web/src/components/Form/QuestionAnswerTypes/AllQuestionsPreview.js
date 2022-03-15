import React from "react";
import PreviewQuestion from "./PreviewQuestion";

const AllQuestionsPreview = (props) => {
  const { questions } = props;

  return (
    <div
      id="question-area"
      className="mt-5 background-color-light color-dark border border-dark "
    >
      <h1>Survey Preview</h1>
      {questions &&
        questions.map((question, index) => {
          localStorage.setItem(`soru ${index + 1}`, JSON.stringify(question));
          return (
            <>
              <PreviewQuestion
                caption={`soru ${index + 1}`}
                question={question}
              />
            </>
          );
        })}
    </div>
  );
};

export default AllQuestionsPreview;
