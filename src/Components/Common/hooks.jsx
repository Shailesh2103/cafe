import React, { useState } from "react";

function Hooks () {

    const [count, setCount] = useState (1)

    function update(){
        setCount (count + 1)
        setCount (count + 1)
    }

  return (
    <>
      <h1>click times {count}</h1>
      <button onClick={update}>click me</button>
    </>
  );
}

export default Hooks;
