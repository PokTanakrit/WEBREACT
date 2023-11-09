import React , {Component} from "react";
import './form.css'

class Maxarr extends Component{
  
  constructor(props){
    super(props);
    this.state ={
      x:0,
      arr:[],
      max:0,
      result:0
    }
    this.calculateMax = this.calculateMax.bind(this);
  }
  calculateMax(){
    for(let i=0;i<this.state.x;i++){
      if( this.state.max < this.state.arr[i]){
        this.state.max = this.state.arr[i];
      }
    }
    this.setState({
      result: this.state.max
    })
  }

  handleInputChange(index,value){
    const {arr} = this.state;
    arr[index] = parseFloat(value);
    this.setState({arr});
  }
  render(){

    const { x , arr , result} = this.state;

    const inputFields = [];
    
    for(let i =0;i<x;i++){
      inputFields.push(
        <div>
          <p>Enter Number</p>
          <input type="number" value={arr[i]} onChange={(e) => this.handleInputChange(i,e.target.value)}/>
        </div>
      )
    }

    return(
      <div>
        <contenttext> Max Array</contenttext>

        <form>
          <p>Enter Number:</p>
          <input type="number" value={x} onChange={(e) => this.setState({ x: parseFloat(e.target.value)})}/>
          <br/>
          {inputFields}
          <button className="btn" type="button" onClick={( ) => this.calculateMax() }>Calculate</button>

          <br/>
          <p>Result:</p>
          <p>{result}</p>

        </form>
      </div>
    )
  }
}

export default Maxarr;