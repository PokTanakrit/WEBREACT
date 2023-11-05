import React, { Component } from "react";
import './form.css';

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      month: 0,
      year: 0,
      days: 0,
      result: "", // Initialize result as an empty string
    };
  }

  calculateSum() {
    let isLeap = this.leap(this.state.year);

    const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let { day, month, year, days } = this.state;

    while (days > 0) {
      if (isLeap === 1) {
        arr[1] = 29;
      } else {
        arr[1] = 28;
      }

      if (day === arr[month - 1] && month !== 12) {
        day = 1;
        month++;
      } else if (day === arr[month - 1] && month === 12) {
        day = 1;
        month = 1;
        year++;
        isLeap = this.leap(year);
      } else {
        day++;
      }
      days--;
    }

    this.setState({
      day,
      month,
      year,
      result: `${day}/${month}/${year}`,
    });
  }

  leap(year) {
    // Adjust the logic to determine leap years in JavaScript
    if (((year + 43) % 4 === 0 && (year + 43) % 100 !== 0) || (year + 43) % 400 === 0) {
      return 1; // Return 1 for a leap year
    } else {
      return 0; // Return 0 for a non-leap year
    }
  }

  render() {
    const { day, month, year, days, result } = this.state;

    return (
      <div>
        <contenttext>What day</contenttext>
        <form>
          <div>
            <div>
              <label>
                <p> Day: </p>
                <input
                  type="number"
                  name="day"
                  value={day}
                  onChange={(e) => this.setState({ day: parseFloat(e.target.value) })}
                />
              </label>
            </div>

            <div>
              <label>
                <p> Month: </p>
                <input
                  type="number"
                  name="month"
                  value={month}
                  onChange={(e) => this.setState({ month: parseFloat(e.target.value) })}
                />
              </label>
            </div>

            <div>
              <label>
                <p> Year: (input 2 digits) </p>
                <input
                  type="number"
                  name="year"
                  value={year}
                  onChange={(e) => this.setState({ year: parseFloat(e.target.value) })}
                />
              </label>
            </div>

            <div>
              <label>
                <p> Days: </p>
                <input
                  type="number"
                  name="days"
                  value={days}
                  onChange={(e) => this.setState({ days: parseFloat(e.target.value) })}
                />
              </label>
            </div>
          </div>
          <br />
          <button className="btn" onClick={() => this.calculateSum()}>Calculate</button>

          <div>
            <p>Result: </p>
            <p>{result}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculate;