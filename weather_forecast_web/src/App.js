import "./App.css";
import React from "react";
import axios from "axios";

export default class app extends React.Component {
  state = {
    weatherForecastData: [],
  };

  componentDidMount() {
    axios.get(`<API URL>`).then((res) => {
      const weatherForecastData = res.data;
      this.setState({ weatherForecastData });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Weather Forecast</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>TemperatureC</th>
                <th>Summary</th>
              </tr>
            </thead>

            <tbody>
              {this.state.weatherForecastData.map((data) => (
                <tr>
                  <td>{data.date}</td>
                  <td>{data.temperatureC}</td>
                  <td>{data.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
