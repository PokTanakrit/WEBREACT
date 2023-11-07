import React, { Component } from "react";
import './form.css';

class Nearestpoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x:0,
      xArr: [],
      yArr: [],
      result: "",
    };
    this.calculateNearestPoints = this.calculateNearestPoints.bind(this);
  }

  calculateNearestPoints() {
    const { xArr, yArr } = this.state;
    const n = xArr.length;
    
    let p1, p2;
    let minDistance = 999;

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = xArr[i] - xArr[j];
        const dy = yArr[i] - yArr[j];
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          minDistance = distance;
          p1 = { x: xArr[i], y: yArr[i] };
          p2 = { x: xArr[j], y: yArr[j] };
        }
      }
    }

    this.setState({
      result: `Nearest points: (${p1.x}, ${p1.y}) and (${p2.x}, ${p2.y})`,
    });
  }

  handleInputChange = (index, value, property) => {
    const { xArr, yArr } = this.state;

    if (property === "x") {
      xArr[index] = parseFloat(value);
    } else if (property === "y") {
      yArr[index] = parseFloat(value);
    }

    this.setState({ xArr, yArr });
  };

  render() {
    const { result, xArr, yArr ,x} = this.state;

    const inputFields = [];

    for (let i = 0; i < x; i++) {
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
        <contenttext>Find Nearest Points</contenttext>
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
          <div>
            {inputFields}
          </div>
          <button className="btn" type="button" onClick={this.calculateNearestPoints}>
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

export default Nearestpoint;
