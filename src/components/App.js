import React, { Component } from "react";
import "../css/App.css";
import moment from 'moment';

class App extends Component {
  // Api only has data of the previous day
  yesterday = moment().subtract(1,'days').format('YYYY/MM/DD')
  state = {
    trendingArticles: [],
    trendDisplay: [],
    date_str: this.yesterday,
  };

  getTrends = (date_str) => {
    const apidata = fetch(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/${date_str}`,
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
        this.setState({
          trendingArticles: response.items[0].articles
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
      this.state.date_str,
    );

    data
      .then(response => {
        if (response === false) {
          throw new Error("No Data Fetched");
        }
      })
      .catch(error => {
        console.log(error);
        // change the date to that of day before yesterday in case yesterday's date has no data
        // this could happen if the call is made before the data for the day is updated by wikimedia
        this.setState({
          date_str: moment().subtract(2,'days').format('YYYY/MM/DD')
        });
        this.getTrends(this.state.date_str);
      });
  }

  componentDidUpdate() {
    console.log("component_updated");
    let articles = this.state.trendingArticles;
    if (articles.length > 0) {
      const filteredArticles = this.filterData(articles);
      if (filteredArticles.length !== articles.length) {
        this.setState({
          trendingArticles: filteredArticles,
          trendDisplay: filteredArticles.slice(0, 10)
        });
      }
    }
  }

  filterData = articles => {
    const nonArticlePages = [
      "Main_Page",
      "Special:Search",
      "Special:CreateAccount",
      "Special:Watchlist",
      "Special:RecentChangesLinked",
      "Special:ElectronPdf",
      "Portal:Current_events",
      "Special:MobileOptions",
      "Special:MobileMenu",
      "Special:Book"
    ];
    let filteredArticles = articles.filter(
      single_article => !nonArticlePages.includes(single_article.article)
    );
    return filteredArticles;
  };

  render() {
    return <div className="App" />;
  }
}

export default App;
