import React, { Component } from "react";
import "../css/App.css";

class App extends Component {
  current_date_obj = new Date();
  yesterday_date_obj = new Date();
  // the API only has the previous days data
  yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).getDate();
  // in case previous date has no data
  day_before_yesterday = new Date(new Date().setDate(new Date().getDate() - 2)).getDate();
  month = this.current_date_obj.getMonth() + 1;
  state = {
    trendingArticles: [],
    trendDisplay: [],
    day: this.yesterday > 9 ? this.yesterday : `0${this.yesterday}`,
    month: this.month > 9 ? this.month : `0${this.month}`,
    year: this.current_date_obj.getFullYear()
  };

  getTrends = (day, month, year) => {
    const apidata = fetch(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/${year}/${month}/${day}`,
      {
        headers: {
          Origin: "*"
        }
      }
    )
      .then(response => {
        if (response.status === 404) {
          throw new Error("No Data Fetched");
        }
        return response.json();
      })
      .then(response => {
        console.log(response)
        this.setState({
          trendingArticles: response
        });
        return response;
      })
      .catch(error => {
        return false;
      });
    return apidata;
  };

  componentDidMount() {
    const data = this.getTrends(
      this.state.day,
      this.state.month,
      this.state.year
    );

    data
      .then(response => {
        if (response === false) {
          throw new Error("No Data Fetched");
        }
      })
      .catch(error => {
        this.setState({
          day:this.day_before_yesterday > 9 ? this.day_before_yesterday : `0${this.day_before_yesterday}`
        })
        this.getTrends(this.state.day, this.state.month, this.state.year);
      });
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
