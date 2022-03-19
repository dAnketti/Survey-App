import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import BasicDatePicker from "./BasicDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { updateSurveyInformation } from "../../../redux/surveyActions";

function SurveyInformation() {
  const { caption: tempCaption, expirationDate: tempExpirationDate } =
    useSelector((store) => ({
      caption: store.survey.caption,
      expirationDate: store.survey.expirationDate,
    }));
  const [caption, setcaption] = useState(tempCaption);
  const [value, setValue] = useState(tempExpirationDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSurveyInformation(caption, value));
  }, [caption, value]);

  return (
    <div>
      <h2>Survey Information</h2>
      <TextField
        id="outlined-basic"
        label="Survey Caption"
        value={caption}
        onChange={(e) => {
          setcaption(e.target.value);
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
