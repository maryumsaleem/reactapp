//import React from "react";
import React, { useState } from "react";
export default function TextForm(props) {
  //function for button
  const HandleUpClick = () => {
    console.log("Uppercase was clicked. "+ text);
    let newText=text.toUpperCase();
    setText(newText);
  };

  //functionfortext area
  const HandleOnChange = (event) => {
    console.log("on change was clicked.");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // setText=("update set text value"); is use to update the value of text in use State hook
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="7"
          value={text}
          onChange={HandleOnChange}
        ></textarea>
      </div>
      <button className="btn-btn-primary" onClick={HandleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
