import { useState } from "react";
import logoDanket from "../../../danketlow.png";
import "../../../App.css";
import AllQuestionsPreview from "./AllQuestionsPreview";
import NewQuestion from "./NewQuestion";
import NavigationBar from "../../../pages/NavigationBar";
import BasicDatePicker from "./BasicDatePicker";
import Accordion from "react-bootstrap/Accordion";
import SurveyInformation from "./SurveyInformation";

function Form() {
  return (
    <div className="text-left col-mt-50">
      <SurveyInformation />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add New Question To Survey</Accordion.Header>
          <Accordion.Body>
            {" "}
            <NewQuestion />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* Tüm Sorular gösterildiği Satırı */}

      <div>
        <AllQuestionsPreview />
      </div>
    </div>
  );
}

export default Form;
