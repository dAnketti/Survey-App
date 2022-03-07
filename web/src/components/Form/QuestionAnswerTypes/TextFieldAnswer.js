import React from "react";

function TextField() {
  return (
    <div className="mt-2">
      <textarea
        className="form-control"
        name="name"
        aria-label="With textarea"
      ></textarea>
    </div>
  );
}

export default TextField;
