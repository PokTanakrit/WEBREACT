import React , {Component} from "react";
import './form.css'

class PowX extends Component{

  constructor(props){
    super(props);
    this.state = {
      x:0,
      result:0
    }
    this.calculatepowx = this.calculatepowx.bind(this); 
  }

  calculatepowx(){
    this.state.result = (Math.pow(this.state.x,4)*3) + (Math.pow(this.state.x,3)*2) -this.state.x + 10;
    this.setState({
      result: this.state.result
    });
  }

  render(){

    const { x,result} = this.state;
    return(
      <div>
        <contenttext> 3X^4 + 2X^3 - X + 10</contenttext>
        <form> 
        <div>
          <p>Enter X:</p>
          <input type="Number" name = "x" value={x} onChange={ e => this.setState({ x: parseFloat(e.target.value)})} ></input>
        </div>
        <br/>

        <div>
          <button className="btn" type="button" onClick={() => this.calculatepowx()}>Calculate</button>
        </div>
        <br/>

        <div>
          <p>React:</p>
          <p>{result}</p>
        </div>
        </form>
      </div>
    )

  }

}

export default PowX;