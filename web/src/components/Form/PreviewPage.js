import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MultipleSelect from "../MultipleSelect";
import Form from "./QuestionAnswerTypes/Form";
import SurveyTitlesPreview from "./QuestionAnswerTypes/SurveyTitlesPreview";
import { Button, TextField } from "@mui/material";
import BasicDatePicker from "./QuestionAnswerTypes/BasicDatePicker";
import { updateSurveyInformation } from "../../redux/surveyActions";
import { useDispatch, useSelector } from "react-redux";

function PreviewPage(props) {
  const {
    title: tempTitle,
    caption: tempCaption,
    startDate: tempStartDate,
    fnishDate: tempFnishDate,
  } = useSelector((store) => ({
    title: store.survey.title,
    caption: store.survey.caption,
    startDate: store.survey.startDate,
    fnishDate: store.survey.fnishDate,
  }));
  const [title, setTitle] = useState(tempTitle);
  const [caption, setCaption] = useState(tempCaption);
  const [startDate, setStartDate] = useState(
    tempStartDate
      ? tempStartDate
      : new Date().getMonth() +
          1 +
          "/" +
          new Date().getDate() +
          "/" +
          new Date().getFullYear()
  );
  const [fnishDate, setFnishDate] = useState(
    tempFnishDate
      ? tempFnishDate
      : new Date().getMonth() +
          1 +
          "/" +
          new Date().getDate() +
          "/" +
          new Date().getFullYear()
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSurveyInformation(title, startDate, fnishDate, caption));
  }, [title, startDate, fnishDate, caption]);
  useEffect(() => {
    setTitle(tempTitle);
  }, [tempTitle]);

  useEffect(() => {
    setCaption(tempCaption);
  }, [tempCaption]);

  return (
    <div>
      <Container className="text-left ">
        <Row>
          <Col className="background-color-primary" md={2}>
            <SurveyTitlesPreview />
          </Col>
          <Col className="bg-mid" md={7}>
            <div className="card">
              <h2 className="card-title text-center">Survey Information</h2>
              <TextField
                id="title"
                label="Survey title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                variant="outlined"
              />{" "}
              <TextField
                id="caption"
                label="Survey description"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
                variant="outlined"
              />{" "}
              <Form />
            </div>
          </Col>
          <Col md={3}>
            <h4 className="mt-5">Select Class To Share Survey</h4>
            <MultipleSelect />
            <h4>Select Dates</h4>
            <div>
              <BasicDatePicker
                chooseDate={setStartDate}
                showDate={startDate}
                title="start date"
              />
            </div>
            <div className="mt-3">
              <BasicDatePicker
                chooseDate={setFnishDate}
                showDate={fnishDate}
                title="fnish date"
              />
            </div>
            <Button variant="contained">Publish</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PreviewPage;
