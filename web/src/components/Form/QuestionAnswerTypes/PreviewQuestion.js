import React from "react";
import {
  QUESTION_MULTIPLE,
  QUESTION_PARAGRAPH,
} from "../../../shared/Constants";

const PreviewQuestion = (props) => {
  const { question, caption } = props;
  const { content, choseQuestionType, answers } = question;
  const randomUUD = parseInt(Math.random() * 200);
  return (
    <div>
      <h4>{caption}</h4>
      <label>{content}</label>
      <ol>
        {answers &&
          Object.entries(answers).map(([key, answer], index) => (
            <>
              {choseQuestionType === QUESTION_PARAGRAPH ? (
                <textarea
                  className="form-control"
                  id="content"
                  rows="3"
                  placeholder="Cevap Metni kullanıcı tarafından girilecek"
                ></textarea>
              ) : choseQuestionType === QUESTION_MULTIPLE ? (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id={`${randomUUD}-${key}`}
                    type="radio"
                    name={randomUUD}
                  />
                  <label
                    className="form-check-label ms-2"
                    for={`${randomUUD}-${key}`}
                  >
                    {answer}
                  </label>
                </div>
              ) : (
                <li value={key}>
                  <input
                    className="form-check-input"
                    id={`${randomUUD}-${key}`}
                    type="radio"
                    name={randomUUD}
                  />
                  <label
                    className="form-check-label ms-2"
                    for={`${randomUUD}-${key}`}
                  >
                    {answer}
                  </label>
                </li>
              )}{" "}
            </>
          ))}
      </ol>
    </div>
  );
};

export default PreviewQuestion;
