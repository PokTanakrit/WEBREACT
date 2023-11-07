import React, { useState } from "react";
import './form.css'; 

function Work() {
  const [x, setX] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    if (x <= 40) {
      setResult(x * 120);
    } else {
      setResult((x - 40) * 20 + (120 * 40));
    }
  }

  return (
    <div>
      <contenttext>Work Work Work !!!</contenttext>
      <form>
        <div>
          <label>
            <text>Enter hour : </text>
            <input
              type="number"
              name="x"
              value={x}
              onChange={e => setX(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <br />
        <button className="btn"  type= "button" onClick={calculateSum}>Calculate</button>

        <div>
          <p>Result: </p>
          <p>{result}</p>
        </div>
      </form>
    </div>
  );
}

export default Work;
