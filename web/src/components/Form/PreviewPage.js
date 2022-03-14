import React from "react";
import NavigationBar from "../../pages/NavigationBar";
import PreviewQuestion from "./QuestionAnswerTypes/PreviewQuestion";

function PreviewPage(props) {
  const { questions } = props;
  const items = { ...localStorage };
  console.log(JSON.stringify(items));
  return (
    <div>
      <NavigationBar />

      <PreviewQuestion />
    </div>
  );
}

export default PreviewPage;
