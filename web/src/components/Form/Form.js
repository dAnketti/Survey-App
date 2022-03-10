import { useState } from "react";
import logoDanket from "../../danketlow.png";
import "../../App.css";
import AllQuestionsPreview from "./QuestionAnswerTypes/AllQuestionsPreview";
import NewQuestion from "./QuestionAnswerTypes/NewQuestion";
import NavigationBar from "../../pages/NavigationBar";

function Form() {
  const [questions, setQuestions] = useState([]);

  const callbackHandlerAllQuestions = (q) => {
    setQuestions((questions) => [...questions, q]);
  };

  return (
    <div className="text-center col-mt-50">
      <NavigationBar />
      {/* Tüm Sorular gösterildiği Satırı */}
      <div className="container col-md-6">
        <div>
          <AllQuestionsPreview questions={questions} />
        </div>

        {/* Form Satırı */}

        <div className="row mt-5">
          <div id="question-area" className="col">
            {/* Yeni soru oluştur Satırı */}
            <NewQuestion
              callbackHandlerAllQuestions={callbackHandlerAllQuestions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
