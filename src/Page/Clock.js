import React, { Component } from "react";
import './form.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: 0,
      m: 0,
      result: 0,
    };
    this.calculatetime = this.calculatetime.bind(this);
  }

  calculatetime() {
    let { h, m } = this.state;
    if (h === 12) {
      h = 0;
    }
    const result = (h * 5.0) + (m / 12.0);

    this.setState({
      result: result,
    });
  }

  render() {
    const { h, m, result } = this.state;

    return (
      <div>
        <contenttext>What time</contenttext>
        <form>
          <div>
            <label>
              Enter hour:
              <input
                type="number"
                name="h"
                value={h}
                onChange={(e) => this.setState({ h: parseFloat(e.target.value) })}
              />
            </label>
          </div>

          <div>
            <label>
              Enter minute:
              <input
                type="number"
                name="m"
                value={m}
                onChange={(e) => this.setState({ m: parseFloat(e.target.value) })}
              />
            </label>
          </div>
          
          <button className="btn" onClick={this.calculatetime}>
            Calculate
          </button>

          <div className="result">
          <p>{result}</p>
        </div>
        </form>
      </div>
    );
  }
}

export default Clock;
