import React, { Component } from "react";
import './form.css';

class Blackpanter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      m: 0,
      n: 0,
      count: 0
    };
    this.calculatePaths = this.calculatePaths.bind(this);
    this.findblackpanter = this.findblackpanter.bind(this);
  }

  findblackpanter(n, m, i, j) {
    if (i === n && j === m) {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    } else {
      if (i < n) {
        this.findblackpanter(n, m, i + 1, j);
      }
      if (j < m) {
        this.findblackpanter(n, m, i, j + 1);
      }
    }
  }

  calculatePaths() {
    const { m, n } = this.state;
    this.setState({ count: 0 }); 
    this.findblackpanter(n, m, 1, 1);
  }

  render() {
    const { m, n, count } = this.state;

    return (
      <div>
        <contenttext>Blackpanter</contenttext>
        <form>
          <div>
            <div>
              <label>
                <p>M : </p>
                <input
                  type="number"
                  name="M"
                  value={m}
                  onChange={(e) => this.setState({ m: parseFloat(e.target.value) })}
                />
              </label>
            </div>

            <div>
              <label>
                <p>N : </p>
                <input
                  type="number"
                  name="N"
                  value={n}
                  onChange={(e) => this.setState({ n: parseFloat(e.target.value) })}
                />
              </label>
            </div>
          </div>
          <br />
          <button className="btn" type="button" onClick={this.calculatePaths}>
            Calculate
          </button>
          <p>React:</p>
          <p>{count}</p>
        </form>
      </div>
    );
  }
}

export default Blackpanter;
