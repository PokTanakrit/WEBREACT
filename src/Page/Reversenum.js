import React, { Component } from "react";
import './form.css'; 

class Reversenum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      result: 0,
    };
    this.calculateReverse = this.calculateReverse.bind(this);
  }

  calculateReverse() {
    const { x } = this.state;
    let num = x;
    let reversed = 0;

    while (num > 0) {
      const lastDigit = num % 10;
      reversed = reversed * 10 + lastDigit;
      num = Math.floor(num / 10);
    }

    this.setState({
      result: reversed,
    });
  }

  render() {
    const { x } = this.state;

    return (
      <div>
        <contenttext>Reverse Number</contenttext>
        <form>
          <div>
            <label>
              <text>Enter number: </text>
              <input type="number" name="x" value={x} onChange={(e) => this.setState({ x: parseFloat(e.target.value) })} />
            </label>
          </div>
          <br />
          <button className="btn" onClick={this.calculateReverse}>
            Calculate
          </button>

          <div>
            <p>Reversed Number:</p>
            <p>{this.state.result}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Reversenum;