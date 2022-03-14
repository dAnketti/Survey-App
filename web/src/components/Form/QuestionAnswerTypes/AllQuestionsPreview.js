import React from "react";
import PreviewQuestion from "./PreviewQuestion";
import { useDispatch, useSelector } from "react-redux";

const AllQuestionsPreview = (props) => {
  
  const { survey: tempSurvey } = useSelector(store => ({ survey: store.survey }));

  return (
    <div id="question-area" className="mt-5">
      <h1>Survey Preview</h1>
      {tempSurvey.questions &&
      Object.entries(tempSurvey.questions).map(([key,question],index)=>(                
            <>
              <PreviewQuestion                
                question={question}
              />
            </>
          
      ))}
    </div>
  );
};

export default AllQuestionsPreview;
