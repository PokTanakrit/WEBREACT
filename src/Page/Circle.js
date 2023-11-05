import React, { Component } from "react";
import './form.css';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      arr: [], // an array to store the numbers
      result: 0, // the average result
    };
  }

  handleInputChange = (index, value) => {
    const newArray = [...this.state.arr];
    newArray[index] = parseFloat(value);
    this.setState({ arr: newArray });
  }

  calculateAvg = () => {
    const { arr } = this.state;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = arr.length === 0 ? 0 : sum / arr.length;
    this.setState({ result: average });
  }

  render() {
    const { x, arr, result } = this.state;

    const inputFields = [];

    for (let i = 0; i < x; i++) {
      inputFields.push(
        <div key={i}>
          <label>
            <p>Enter a number: </p>
            <input
              type="number"
              name={`x-${i}`}
              value={arr[i] || ''}
              onChange={(e) => this.handleInputChange(i, e.target.value)}
            />
          </label>
        </div>
      );
    }

    return (
      <div>
        <contenttext>Function Average</contenttext>
        <form>
          <div>
            <label>
              <text>How many numbers: </text>
              <input
                type="number"
                name="x"
                value={x}
                onChange={(e) => this.setState({ x: parseFloat(e.target.value) })}
              />
            </label>
          </div>
          <br />
          {inputFields}
          <button className="btn" onClick={this.calculateAvg}>
            Calculate
          </button>

          <div>
            <p>Value:</p>
            <p>{result}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Circle;
