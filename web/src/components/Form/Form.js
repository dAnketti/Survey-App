import { useState, useEffect } from "react";
import "../../App.css";
import RadioButton from "./RadioButton";

function Form() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <div>
      <h1>Form</h1>
      <h2>Question - 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsa
        corrupti sapiente ad et, sed dolorem ab non animi commodi.
      </p>
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br /> <br />
      <hr />
      <h2>Question - 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsa
        corrupti sapiente ad et, sed dolorem ab non animi commodi.
      </p>
      <RadioButton />
    </div>
  );
}

export default Form;
