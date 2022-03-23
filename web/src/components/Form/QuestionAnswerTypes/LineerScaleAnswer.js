import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Dropdown } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswers } from "../../../redux/surveyActions";
import { listItemTextClasses } from "@mui/material";
const LineerScaleAnswer = (props) => {
  const { answers: tempAnswers, orders } = useSelector((store) => ({
    answers: store.question.answers,
    orders: store.question.orders,
  }));

  const [minValue, setMinValue] = useState(parseInt(0));
  const [maxValue, setMaxValue] = useState(parseInt(5));
  const dispatch = useDispatch();

  useEffect(() => {
    setMaxValue(parseInt(tempAnswers.length > 0 ? tempAnswers.length : 5));
  }, [orders]);
  const onChangeAnswer = (event) => {
    const { name, value } = event.target;
    let answers = tempAnswers.filter((ans, i) => {
      const { answerOrder, answer } = ans;
      return parseInt(name) !== parseInt(answerOrder);
    });
    answers = [...answers, { answerOrder: name, answer: value }];
    dispatch(updateAnswers(answers));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <p>Min Value</p>
          <span>
            <Stack direction="horizontal" gap={3}>
              <p>Min / Max Value </p>
              <Dropdown>
                <Dropdown.Toggle variant="dark background-color-primary">
                  {minValue + "" || "En Küçük"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="background-color-primary"
                    eventKey="0"
                    onClick={(event) => {
                      setMinValue(parseInt(event.target.innerHTML));
                    }}
                  >
                    0
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={(event) => {
                      setMinValue(parseInt(event.target.innerHTML));
                    }}
                  >
                    1
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="dark background-color-primary">
                  {maxValue || "En Büyük"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {[...Array(9)].map((x, i) => {
                    return (
                      <Dropdown.Item
                        eventKey={i + 2}
                        onClick={(event) => {
                          setMaxValue(parseInt(event.target.innerHTML));
                        }}
                      >
                        {i + 2}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
          </span>
        </div>
        <div className="col col-md-4">
          <p>Max Value</p>
        </div>
      </div>

      <ul class="list-group">
        {[...Array(parseInt(maxValue))].map((x, j) => {
          //döngü başı

          const { answerOrder, answer } =
            tempAnswers[j + minValue * 1] &&
            tempAnswers &&
            tempAnswers.length > 0 &&
            j < tempAnswers.length
              ? tempAnswers[j + minValue * 1]
              : { answerOrder: j + minValue * 1, answer: " " };
          const o = answerOrder * 1 + minValue * 1;
          const a = answer;
          return (
            <li class="list-group-item">
              <div className="row">
                <div className="col col-1">
                  <span>{o})</span>
                </div>
                <div className="col col-8">
                  <input
                    type="text"
                    key={o}
                    name={o}
                    value={a}
                    onChange={onChangeAnswer}
                    placeholder="options description"
                  />
                </div>
              </div>
            </li>
          );
          //döngü sonu
        })}
      </ul>
    </div>
  );
};

export default LineerScaleAnswer;
