import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  state = {
    tendingArticles:[],
    trendDisplay:[]
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
    this.getTrends(29,'01',2019);

  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
