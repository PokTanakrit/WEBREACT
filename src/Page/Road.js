import React, { Component } from "react";
import './form.css';

class Road extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      arr: [],
      result: 0,
      Up_lane: 0,
      Down_lane: 0,
    };
    this.calculateMax = this.calculateMax.bind(this);
  }

  calculateMax() {
    const { arr } = this.state;
    let max = 0;
    arr.sort((a, b) => a - b);
    if (arr.length >= 2) {
      for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff > max) {
          max = diff;
        }
      }
    }
  
    this.setState({
      result: max,
    });
  }

  handleInputChange = (index, value) => {
    const { arr } = this.state;
    arr[index] = parseFloat(value);
    this.setState({
      arr
    });
  };

  render() {
    const { arr, result, Up_lane, Down_lane } = this.state;

    const inputFields = [];

    for (let i = 0; i < Up_lane + Down_lane; i++) {
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
        <contenttext>Up lane and Down lane</contenttext>
        <form>
          <div>
            <div>
              <label>
                <p>Up_lane : </p>
                <input
                  type="number"
                  name="Up_lane"
                  value={Up_lane}
                  onChange={(e) => this.setState({ Up_lane: parseFloat(e.target.value) })}
                />
              </label>
            </div>

            <div>
              <label>
                <p>Down_lane : </p>
                <input
                  type="number"
                  name="Down_lane"
                  value={Down_lane}
                  onChange={(e) => this.setState({ Down_lane: parseFloat(e.target.value) })}
                />
              </label>
            </div>
          </div>
          <br />
          {inputFields}
          <button className="btn" type="button" onClick={this.calculateMax}>
            Calculate
          </button>
          <p>Maximum Value:</p>
          <p>{result}</p>
        </form>
      </div>
    );
  }
}

export default Road;
