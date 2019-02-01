import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
    current_date_obj = new Date();
    yesterday_date_obj = new Date();
    yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).getDate();
    month =this.current_date_obj.getMonth()+1
  state = {
    tendingArticles:[],
    trendDisplay:[],
    day:this.yesterday>9?this.yesterday:`0${this.yesterday}`,
    month:this.month>9?this.month:`0${this.month}`,
    year:this.current_date_obj.getFullYear()
  };

  getTrends = (day,month,year) =>{

    fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/2019/01/29',
    {
      'headers':
        {
          'Origin': '*',
        }
    })
    .then(response => {
      return response.json();
    }).then(response=>{
      console.log(response)
    });

    // this.setState({
    //   tendingArticles : trends
    // })
  }

  componentDidMount(){

    this.getTrends(this.state.day,this.state.month,this.state.year);

  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
