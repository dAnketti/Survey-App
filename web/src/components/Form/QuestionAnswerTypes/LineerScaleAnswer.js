import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Dropdown } from "react-bootstrap";
const LineerScaleAnswer = (props) => {
  const { answerCallbackHandler } = props;
  const [minValue, setMinValue] = useState(parseInt(0));
  const [maxValue, setMaxValue] = useState(5);
  const [answerArray, setAnswerArray] = useState({});

  useEffect(() => {
    answerCallbackHandler(answerArray);
  }, [answerArray]);

  const onChangeAnswer = (event) => {
    const { name, value } = event.target;
    setAnswerArray({
      ...answerArray,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <p>Min Value</p>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              {minValue + "" || "En Küçük"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
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
        </div>
        <div className="col col-md-4">
          <p>Max Value</p>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              {maxValue || "En Büyük"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {[...Array(9)].map((x, i) => (
                <Dropdown.Item
                  eventKey={i + 2}
                  onClick={(event) => {
                    setMaxValue(parseInt(event.target.innerHTML));
                  }}
                >
                  {i + 2}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* Lineer değer açıklamaları */}

      <ul class="list-group">
        {[...Array(minValue === 0 ? maxValue + 1 : maxValue)].map((x, i) => (
          <li class="list-group-item">
            <div className="row">
              <div className="col col-1">
                <span>{i + minValue})</span>
              </div>
              <div className="col col-8">
                <input
                  name={i + minValue}
                  type="text"
                  onChange={onChangeAnswer}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LineerScaleAnswer;
