import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteQuestionByOrderInSurvey,replaceSequenceNumberWithAHigherSequenceNumber } from '../../../redux/surveyActions';
import { QUESTION_MULTIPLE, QUESTION_PARAGRAPH,QUESTION_LINEER } from '../../../shared/Constants';

const PreviewQuestion = (props) => {
    const {question}= props;
    const {content,chooseQuestionType,answers,order}=question;
    
    const dispatch=useDispatch();

    const deleteClickQuestionByOrderInSurvey= (event)=>{
        dispatch(deleteQuestionByOrderInSurvey(order));
    }

    const replaceUp= ()=>{      
        dispatch(replaceSequenceNumberWithAHigherSequenceNumber(order,'up'))
    }
    const replaceDown= ()=>{    
        dispatch(replaceSequenceNumberWithAHigherSequenceNumber(order,'down'))
    }
    return (
        <div >
            <div className='row d-flex '>
                <div className='col d-flex'>
                    <h4 className='float-left'>{`Soru : ${order}`} </h4>
                </div>
                <div className='col d-flex float-right'>
                    <span  class="material-icons float-right" style={{ cursor: 'pointer' }} onClick={deleteClickQuestionByOrderInSurvey} >delete</span>
                    <span class="material-icons float-right"  style={{ cursor: 'pointer' }} onClick={replaceUp}>arrow_drop_up </span>
                    <span class="material-icons float-right"  style={{ cursor: 'pointer' }} onClick={replaceDown}>arrow_drop_down </span>
                </div>
            </div>
            <label>{content}</label> 
           <ol>
            {   chooseQuestionType===QUESTION_PARAGRAPH 
                    ? <textarea className="form-control" id="content" rows="3"  placeholder="Cevap Metni kullanıcı tarafından girilecek" ></textarea> 
                    :    
                answers && Object.entries(answers).map(([key,answer],index)=>(
                    <>
                    {chooseQuestionType===QUESTION_MULTIPLE ? 
                    <div className="form-check">
                        <input className="form-check-input" id={`${order}-${key}`}  type="radio"  name={order} />
                        <label className="form-check-label ms-2" for={`${order}-${key}`} >
                            {answer}
                        </label>
                    </div> : chooseQuestionType===QUESTION_LINEER &&
                    <li value={key}>
                        <input className="form-check-input" id={`${order}-${key}`} type="radio" name={order}/>                            
                        <label className="form-check-label ms-2" for={`${order}-${key}`}>
                            {answer}
                        </label>                           
                    
                    </li>
                } </>
                ))}                                
                 
                
            
           </ol>
            
            
        </div>
    );
};

export default PreviewQuestion;