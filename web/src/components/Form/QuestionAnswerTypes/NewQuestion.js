import React, {  useState } from 'react';
import { QUESTION_MULTIPLE,QUESTION_LINEER, QUESTION_PARAGRAPH } from '../../../shared/Constants';
import LineerScaleAnswer from './LineerScaleAnswer';
import MultipleChoice from './MultipleChoice';

const NewQuestion = (props) => {
 const {callbackHandlerAllQuestions} =props;
  const [question,setQuestion]=useState({
    content:"",
    answers:[],
    choseQuestionType:QUESTION_MULTIPLE
  });
  

  const answerCallbackHandler= answers=>{
    setQuestion({
      ...question,
      answers:answers
    });
  };
 

  const onSaveBtnClick= event =>{
    callbackHandlerAllQuestions(question);

    setQuestion({
      content:"",
      answers:[],
      choseQuestionType:QUESTION_MULTIPLE
    });
  }

  
  const {choseQuestionType,content,answers}=question;
 
    return (
        <div className='container'>
  <div className="form-group row">
    <label for="content" class="col-sm-2 col-form-label">Soru Metni </label>
    <div className="col-sm-10">
        <textarea className="form-control" id="content" rows="3" value={content} placeholder="Soru metni" onChange={event=>{setQuestion({...question,content:event.target.value})}}></textarea>
    </div>
    <div className="form-group row">
    <label for="content" class="col-sm-2 col-form-label">Cevap Türü </label>
    <div className="col-sm-10">
    <div class="btn-group" role="group">
        <button className='btn btn-sm btn-info' onClick={event=>(setQuestion({...question,choseQuestionType:QUESTION_MULTIPLE}))}>Çoktan Seçmeli </button>
        <button className='btn btn-sm btn-info ms-2' onClick={event=>(setQuestion({...question,choseQuestionType:QUESTION_LINEER}))}>Doğrusal Ölçek</button>
        <button className='btn btn-sm btn-info ms-2' onClick={event=>(setQuestion({...question,choseQuestionType:QUESTION_PARAGRAPH}))}>Paragraf</button>
    </div>
    </div>
  </div>
  </div>
  
  {    
    (choseQuestionType === QUESTION_MULTIPLE) ? <MultipleChoice isEmpty={answers} answerCallbackHandler={answerCallbackHandler}/> 
      : (choseQuestionType === QUESTION_LINEER) ? <LineerScaleAnswer isEmpty={answers} answerCallbackHandler={answerCallbackHandler}/> 
      : (<div className="col-sm-10">
        <textarea className="form-control" id="content" rows="3" disabled='true' placeholder="Cevap Metni kullanıcı tarafından girilecek" ></textarea>
      </div>)   
  }
 
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary" onClick={onSaveBtnClick}>Kaydet</button>
    </div>
  </div>
</div>
    );
};

export default NewQuestion;