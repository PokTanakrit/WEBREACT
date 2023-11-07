import React, { Component } from "react";
import './form.css'; 


class PowX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      result: 0, 
    };
    this.calculateSum = this.calculateSum.bind(this);
  }

  calculateSum() {
    this.state.result = Math.pow(this.state.x, 4) + 2 * Math.pow(this.state.x, 3) - this.state.x + 10;
    this.setState({
      result: this.state.result
    });
  }
  

  render() {
     const { x , result} = this.state;

    return (
      <div>
        <contenttext>3x^4 + 2x^3 - x + 10</contenttext>
        <form> 
        <div>
          <label>
            <text>Enter X : </text>
            <input type="number" name="x" value={x} onChange={e => this.setState({ x: parseFloat(e.target.value) })} />
          </label>
        </div>
        <br/>
        <button className="btn" type= "button" onClick={() => this.calculateSum(this.state.x)}>Calculate</button>
        

        <div>
          <p>Result: </p>
          <p>{result}</p>
        </div>

        </form>
      </div>
    );
  }
}

export default PowX;

