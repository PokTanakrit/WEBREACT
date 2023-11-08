import React, { Component } from "react";
import './form.css';
import axios from "axios";

class Nearestpoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1,
      Arr: [],
      result: "",
    };
    this.calculateNearestPoints = this.calculateNearestPoints.bind(this);
    this.getdatafromDatabase = this.getdatafromDatabase.bind(this);
  }

  calculateNearestPoints() {
    const { Arr, x } = this.state;

    let p1, p2;
    let minDistance = Infinity;

    for (let i = 0; i < x; i++) {
      for (let j = i + 1; j < Arr.length; j++) {
        const dx = Arr[i][0] - Arr[j][0];
        const dy = Arr[i][1] - Arr[j][1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          minDistance = distance;
          p1 = { x: Arr[i][0], y: Arr[i][1] };
          p2 = { x: Arr[j][0], y: Arr[j][1] };
        }
      }
    }

    this.setState({
      result: `Nearest points: (${p1.x}, ${p1.y}) and (${p2.x}, ${p2.y})`,
    });
  }

  getdatafromDatabase() {
    axios.get('http://localhost:3800/Nearestpoint')
      .then(res => {
        const data = res.data.Nearestpoint[0];
        console.log(data);

        if (data && data.x && data.Arr && Array.isArray(data.Arr)) {
          this.setState({
            x: data.x,
            Arr: data.Arr,
          });
        } else {
          console.error("Invalid data format from the API.");
        }
      })
      .catch(error => {
        console.error("Error fetching data from the API:", error);
      });
  }

  handleInputChange = (indexi, indexj, value) => {
    const { Arr } = this.state;
    Arr[indexi] = Arr[indexi] || [];
    Arr[indexi][indexj] = parseFloat(value);
    this.setState({ Arr });
  };

  render() {
    const { result, Arr, x } = this.state;

    const inputFields = [];

    for (let i = 0; i < x; i++) {
      inputFields.push(
        <div key={i}>
          <label>
            <p>Enter a set (x, y): </p>
            <input
              type="number"
              value={Arr[i] ? Arr[i][0] : ''}
              onChange={(e) => this.handleInputChange(i, 0, e.target.value)}
            />
            <input
              type="number"
              value={Arr[i] ? Arr[i][1] : ''}
              onChange={(e) => this.handleInputChange(i, 1, e.target.value)}
            />
          </label>
        </div>
      );
    }

    return (
      <div>
        <contenttext>Find Nearest Points</contenttext>
        <form>
          <div>
            <label>
              <span>How many numbers : </span>
              <input
                type="number"
                name="x"
                value={x}
                onChange={(e) => this.setState({ x: parseFloat(e.target.value) })}
              />
            </label>
          </div>
          <div>{inputFields}</div>
          <button className="btn" type="button" onClick={this.calculateNearestPoints}>
            Calculate
          </button>
          <button className="btn" type="button" onClick={this.getdatafromDatabase}>
            Api
          </button>

          <div>
            <p>Result:</p>
            <p>{result}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Nearestpoint;
