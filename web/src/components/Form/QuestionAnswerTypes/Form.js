import "../../../App.css";
import AllQuestionsPreview from "./AllQuestionsPreview";
import NewQuestion from "./NewQuestion";

import Accordion from "react-bootstrap/Accordion";
function Form() {
  return (
    <div className="text-left col-mt-50">
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
