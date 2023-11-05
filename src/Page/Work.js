import React, { Component } from "react";
import './form.css'; 


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      result: 0, 
    };
    this.calculateSum = this.calculateSum.bind(this);
  }

  calculateSum() {
    
        
        if( this.state.x <= 40){
            this.setState({
            result: this.state.result= this.state.x * 120
            });
        }
        else{
            this.setState({
            result: this.state.result= (this.state.x-40) * 20  + (120 * 40 )
            });
        }
  }
  

  render() {
     const { x } = this.state;

    return (
      <div>
        <contenttext>Work Work Work</contenttext>
        <form> 
        <div>
          <label>
            <text>Enter hour : </text>
            <input type="number" name="x" value={x} onChange={e => this.setState({ x: parseFloat(e.target.value) })} />
          </label>
        </div>
        <br/>
        <button className="btn" onClick={() => this.calculateSum(this.state.x)}>Calculate</button>
        

        <div>
          <p>Result: </p>
          <p>{this.state.result}</p>
        </div>

        </form>
      </div>
    );
  }
}

export default Work;

