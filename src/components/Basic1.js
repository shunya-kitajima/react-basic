import React from "react";

function Basic1(props) {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <h1>{props.name}</h1>
      <h1>Hello React2</h1>
    </>
  );
}

export default Basic1;
