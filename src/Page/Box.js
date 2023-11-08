import React, { Component } from "react";
import './form.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xArr: [],
      yArr: [],
      result: '',
    };
    this.calculateBox = this.calculateBox.bind(this);
  }

  calculateBox() {
    const { xArr, yArr } = this.state;
    const arr = [...xArr, ...yArr];
    arr.sort((a, b) => a - b);

    const count = {};
    let index = 0;
    
    for (let i = 0; i < 11; i++) {
      if (arr[i] === arr[i + 1]) {
        if (!count[index]) count[index] = 1;
        count[index]++;
      } else {
        index++;
      }
    }

    for (let i = 0; i <= index; i++) {
      if (count[i] % 4 !== 0) {
        this.setState({ result: 'No' });
        return;
      }
    }
    this.setState({ result: 'Yes' });
  }

  handleInputChange = (index, value, property) => {
    const { xArr, yArr } = this.state;

    if (property === 'x') {
      xArr[index] = parseFloat(value);
    } else if (property === 'y') {
      yArr[index] = parseFloat(value);
    }

    this.setState({ xArr, yArr });
  }

  render() {
    const { result, xArr, yArr } = this.state;

    const inputFields = [];

    for (let i = 0; i < 6; i++) {
      inputFields.push(
        <div key={i}>
          <label>
            <p>Enter a set (x, y): </p>
            <input
              type="number"
              name={`x-${i}`}
              placeholder="X"
              value={xArr[i] || ''}
              onChange={(e) => this.handleInputChange(i, e.target.value, 'x')}
            />
            <input
              type="number"
              name={`y-${i}`}
              placeholder="Y"
              value={yArr[i] || ''}
              onChange={(e) => this.handleInputChange(i, e.target.value, 'y')}
            />
          </label>
        </div>
      );
    }

    return (
      <div>
        <contenttext>Can Make Box</contenttext>
        <form>
          <br />
          {inputFields}
          <button className="btn" type="button" onClick={this.calculateBox}>
            Calculate
          </button>

          <div>
            <p>Result:</p>
            <p>{result}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Box;
