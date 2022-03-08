import { useState, useEffect } from "react";
import logoDanket from "../../danketlow.png";
import "../../App.css";
import { useFormik } from "formik";
import { postQuestion } from "../../api/ApiCalls";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RadioButton from "./QuestionAnswerTypes/RadioButton";
import MultipleChoice from "./QuestionAnswerTypes/MultipleChoice";
import QuestionPage from "./QuestionAnswerTypes/QuestionPage";
import PreviewQuestion from "./QuestionAnswerTypes/PreviewQuestion";
import AllQuestionsPreview from "./QuestionAnswerTypes/AllQuestionsPreview";
import NewQuestion from "./QuestionAnswerTypes/NewQuestion";

function Form() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      questionBody: "",
    },
    onSubmit: (values) => {
      const body = {
        questionBody: values.questionBody,
      };
      postQuestion(body);
    },
  });
  

  const [question,setQuestion]=useState(
    {
      content:'Aşağıdaki soruları cevapla.',
      answers:["Erkek","Kadın"],
      type:'checkbox'
    }
  );

  const [question2,setQuestion2]=useState(
    {
      content:'Aşağıdaki soruları cevapla.',
      answers:["Erkek","Kadın"],
      type:'radio'
    }
  );

  const [questions,setQuestions]=useState([question,question,question2]);
  

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
        <NewQuestion/>
        </div>  
        </div>
        
      </div>
    </div>
  );
}

export default Form;
