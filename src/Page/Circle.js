import React, { Component } from "react";
import './form.css';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,      // Number of circles
      circles: [], // An array to store circle objects
      result: 0,  // The count of overlapping circles
    };
  }

  handleInputChange = (index, value, property) => {
    const newCircles = [...this.state.circles];
    newCircles[index] = {
      ...newCircles[index],
      [property]: parseFloat(value),
    };
    this.setState({ circles: newCircles });
  }

  calculateCircle = () => {
    const { circles } = this.state;
    const n = circles.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          const circleA = circles[i];
          const circleB = circles[j];

          const dx = circleA.x - circleB.x;
          const dy = circleA.y - circleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < circleA.r + circleB.r) {
            count += 1;
          }
        }
      }
    }

    this.setState({
      result: count
    });
  }

  render() {
    const { x, circles, result } = this.state;

    const inputFields = [];

    for (let i = 0; i < x; i++) {
      inputFields.push(
        <div key={i}>
          <label>
            <p>Enter circle {i + 1}:</p>
            <div>
              <label>X: </label>
              <input
                type="number"
                name={`x-${i}`}
                value={circles[i]?.x || ''}
                onChange={(e) => this.handleInputChange(i, e.target.value, "x")}
              />
            </div>
            <div>
              <label>Y: </label>
              <input
                type="number"
                name={`y-${i}`}
                value={circles[i]?.y || ''}
                onChange={(e) => this.handleInputChange(i, e.target.value, "y")}
              />
            </div>
            <div>
              <label>Radius: </label>
              <input
                type="number"
                name={`r-${i}`}
                value={circles[i]?.r || ''}
                onChange={(e) => this.handleInputChange(i, e.target.value, "r")}
              />
            </div>
          </label>
        </div>
      );
    }

    return (
      <div>
        <contenttext>Circle Overlap Calculator</contenttext>
        <form>
          <div>
            <label>
              <p>How many circles: </p>
              <input
                type="number"
                name="x"
                value={x}
                onChange={(e) => this.setState({ x: parseFloat(e.target.value) })} />
            </label>
          </div>
          <br />
          {inputFields}
          <button className="btn" type= "button"  onClick={this.calculateCircle}>
            Calculate
          </button>
        
          <div>
            <p>Number of Overlapping Circles:</p>
            <p>{result}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Circle;
