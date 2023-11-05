import React, { Component } from "react";
import './form.css';

class Maxarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      arr: [],
      result: 0,
      max: 0
    };
    this.calculateMax = this.calculateMax.bind(this);
  }

  calculateMax() {
    for (let i = 0; i < this.state.x; i++)
    {
      if (this.state.max < this.state.arr[i]){
        this.state.max = this.state.arr[i]
      }
    }
    this.setState({
      result: this.state.max
    });
    
  }

  handleInputChange = (index, value) => {
    const { arr } = this.state;
    arr[index] = parseFloat(value);
    this.setState({ 
    arr });
  };

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
        <contenttext>Find Max in Array</contenttext>
        <form>
          <div>
            <label>
              <text>How many numbers : </text>
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
          <button className="btn" onClick={this.calculateMax}>
            Calculate
          </button>

          <div>
          <p>Maximum Value:</p>
          <p>{result}</p>

        </div>
        </form>
      </div>
    );
  }
}

export default Maxarr;
