import { useState } from "react";
import logoDanket from "../../danketlow.png";
import "../../App.css";
import AllQuestionsPreview from "./QuestionAnswerTypes/AllQuestionsPreview";
import NewQuestion from "./QuestionAnswerTypes/NewQuestion";

function Form() {

const [questions,setQuestions]=useState([]);

const callbackHandlerAllQuestions=(q)=>{
  setQuestions(questions=>[...questions,q]);
}



  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              style={{ borderRadius: 10 }}
              src={logoDanket}
              alt=""            
              width="70"
            />
          </a>
        </div>
       
      </nav>
      {/* Tüm Sorular gösterildiği Satırı */}
      <div className="container col-md-6">
      <div >
        <AllQuestionsPreview questions={questions}/>
      </div>
          
     
      {/* Form Satırı */}
      
      <div className="row mt-5">       
     
        <div id="question-area" className="col">  
      {/* Yeni soru oluştur Satırı */}
        <NewQuestion callbackHandlerAllQuestions={callbackHandlerAllQuestions} />
        </div>  
        </div>
        
      </div>
    </div>
  );
}

export default Form;
