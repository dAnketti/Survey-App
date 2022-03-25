import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import BasicDatePicker from "./BasicDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { updateSurveyInformation } from "../../../redux/surveyActions";

function SurveyInformation() {
  const { title: tempTitle,caption: tempCaption, expirationDate: tempExpirationDate } =
    useSelector((store) => ({
      title: store.survey.title,
      caption: store.survey.caption,
      expirationDate: store.survey.expirationDate,
    }));
  const [title, setTitle] = useState(tempTitle);
  const [caption, setCaption] = useState(tempCaption);
  const [value, setValue] = useState(tempExpirationDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSurveyInformation(title, value,caption));
  }, [title, value,caption]);
  useEffect(() => {
    setTitle(tempTitle)
  }, [tempTitle]);

  useEffect(() => {
    setCaption(tempCaption)
  }, [tempCaption]);
  
  return (
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default SurveyInformation;
