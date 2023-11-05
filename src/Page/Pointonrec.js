import React, { Component } from "react";
import './form.css';

class PointOnRect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: 0,
      y1: 0,
      m: 0,
      n: 0,
      x0: 0,
      y0: 0,
      result: "", // Initialize result as 0
    };
    this.calculateSum = this.calculateSum.bind(this);
  }

  calculateSum() {
   
    const { x1, y1, m, n, x0, y0 } = this.state;

    if ((x0 >= x1 && x0 <= m) && (y0 >= y1 && y0 <= n)) {

      this.setState({
        result: this.state.result + "Yes"
      });
    } else {
      
      this.setState({
        result: this.state.result + "No"
      });
    }
  }

  render() {
    const { x1, y1, m, n, x0, y0, result } = this.state;

    return (
      <div>
        <contenttext>Point on Rectangle</contenttext>
        <form>
          <div>
            <div>
              <label>
                <p> Centerpoint X: </p>
                <input
                  type="number"
                  name="x1"
                  value={x1}
                  onChange={(e) => this.setState({ x1: parseFloat(e.target.value) })}
                />
              </label>
            </div>

            <div>
              <label>
                <p> Centerpoint X: </p>
                <input
                  type="number"
                  name="y1"
                  value={y1}
                  onChange={(e) => this.setState({ y1: parseFloat(e.target.value) })}
                />
              </label>
            </div>
          </div>
          <br />
          <div>
            <label>
              <p> Width: </p>
              <input
                type="number"
                name="m"
                value={m}
                onChange={(e) => this.setState({ m: parseFloat(e.target.value) })}
              />
            </label>
          </div>

          <div>
            <label>
              <p> Long: </p>
              <input
                type="number"
                name="n"
                value={n}
                onChange={(e) => this.setState({ n: parseFloat(e.target.value) })}
              />
            </label>
          </div>

          <div>
            <label>
              <p> x0: </p>
              <input
                type="number"
                name="x0"
                value={x0}
                onChange={(e) => this.setState({ x0: parseFloat(e.target.value) })}
              />
            </label>
          </div>

          <div>
            <label>
              <p> y0: </p>
              <input
                type="number"
                name="y0"
                value={y0}
                onChange={(e) => this.setState({ y0: parseFloat(e.target.value) })}
              />
            </label>
          </div>

          

          <br />
          <button className="btn" onClick={this.calculateSum}>Calculate</button>

          <div>
            <p>Result: </p>
            <p>{result }</p>
          </div>
        </form>
      </div>
    );
  }
}

export default PointOnRect;
