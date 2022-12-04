import React, { useState } from "react";

function BandInput({onBandSubmit}) {
  const [input, setInput] = useState("");

  
  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    onBandSubmit(input)
    setInput("");
  }
  return (
    <>
      <div>Band Input</div>
      <form onSubmit={handleSubmit}>
        <label> name
        <input type="text" onChange={handleChange}/>
        </label>
        <input value="add band" type="submit"/>
      </form>
    </>
  );
}

export default BandInput;
