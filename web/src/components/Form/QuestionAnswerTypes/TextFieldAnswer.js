import React from "react";

function TextFieldAnswer() {
  return (
    <div className="mt-2">
      <textarea
        className="form-control"
        name="name"
        aria-label="With textarea"
        placeholder="Answer will be displayed in here"
        disabled="disabled"
      ></textarea>
    </div>
  );
}

export default TextFieldAnswer;
