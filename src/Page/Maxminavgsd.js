import React, { Component } from "react";
import './form.css';

class Maxminavgsd extends Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        arr: [],
        result: '',
        sum: 0
      };
      this.calculate = this.calculate.bind(this);
    }

    calculate() {
        const { arr, x } = this.state;
        const sortedArr = [...arr].sort((a, b) => a - b);
    
        let sum = 0;
        for (let i = 0; i < x; i++) {
            sum += sortedArr[i];
        }
        let avg = sum / x;
    
        let SD = 0;
        for (let i = 0; i < x; i++) {
            SD += Math.pow(sortedArr[i] - avg, 2);
        }
        SD = Math.sqrt(SD / (x - 1));
    
        const max = sortedArr[x - 1];
        const min = sortedArr[0];
    
        this.setState({
            result: `Avg: ${avg}, Max: ${max}, Min: ${min}, SD: ${SD}`,
        });
    }
    
    
  
    handleInputChange = (index, value) => {
      const { arr } = this.state;
      arr[index] = parseFloat(value);
      this.setState({ 
      arr });
    };
  
    render() {
      const { x, arr, result } = this.state;
  
      const inputFields = [];
  
      for (let i = 0; i < x; i++) {
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
          <contenttext>Calculate MAX MIN AVG  SD</contenttext>
          <form>
            <div>
              <label>
                <text>How many numbers : </text>
                <input
                  type="number"
                  name="x"
                  value={x}
                  onChange={(e) => this.setState({ x: parseFloat(e.target.value) })}
                />
              </label>
            </div>
            <br />
            {inputFields}
            <button className="btn" type= "button" onClick={this.calculate}>
              Calculate
            </button>
  
            <div>
            <p>Value:</p>
            <p>{result}</p>
  
          </div>
          </form>
        </div>
      );
    }
  }
  
  export default Maxminavgsd;
  