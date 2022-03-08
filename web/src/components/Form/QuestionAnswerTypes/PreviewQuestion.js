import React from 'react';

const PreviewQuestion = (props) => {
    const {question,caption}= props;
    const {content,type,answers}=question;

    return (
        <div>
            <h4>{caption}</h4>
            <label>{content}</label> 
           <div>
            {
               
                answers.map( (answer, index) =>{
                   return <> 
                   <div className="form-check">
                        <input className="form-check-input" id={index} type={type||"radio"} name="answer"  value={answer} />
                        <label className="form-check-label" for={index}>
                            {answer}
                        </label>
                    </div>
                   </>
                }                                
                 )
                
            }   
           </div>
            
            
        </div>
    );
};

export default PreviewQuestion;