import React from 'react';
import PreviewQuestion from './PreviewQuestion';

const AllQuestionsPreview = (props) => {
    const {questions}=props;

    return (
            <div id="question-area" >
                <h1>Anket</h1>
            {
            questions &&
            questions.map( (question, index) =>{
                return <>                

                <PreviewQuestion caption={`soru ${index+1}`} question={question}/>
                
                </>
            })
        }
                    
        </div>
    );
};

export default AllQuestionsPreview;