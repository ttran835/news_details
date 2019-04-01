import React, { Component } from 'react';
import Axios from 'axios';

// components
import AllNews from '../components/NewsComponents/AllNews/AllNews';
import SearchQuery from '../components/NewsQueryComponents/SearchQuery/SearchQuery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      value: '',
    };

    this.getNews = this.getNews.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    Axios.defaults.baseURL = `http://localhost:${process.env.SERVER_PORT}`;
    // Axios.defaults.baseURL =
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    Axios.get('/home').then(res => {
      this.setState({
        news: res.data,
      });
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchQuery
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
          />
        </div>
        <div className="row">
          <AllNews value={this.state.value} />
        </div>
      </div>
    );
  }
}

/*
Example news data; 
{
    "_id": 1,
    "source": [["id", "the-new-york-times"], ["name", "The New York Times"]],
    "author": "DAVE PHILIPPS",
    "title": "White Supremacism in the U.S. Military, Explained",
    "description": "For much of the 20th century, the Ku Klux Klan actively recruited members in the armed forces without hindrance. Dozens of Navy sailors in uniform attended a Klan rally in the summer of 1923, where they were photographed holding their robes.",
    "url": "https://www.nytimes.com/2019/02/27/us/military-white-nationalists-extremists.html",
    "urlToImage": "https://static01.nyt.com/images/2019/02/28/us/28military-1-print/23Military-2-facebookJumbo.jpg",
    "publishedAt": "2019-02-27T10:00:08Z",
    "content": "Even so, the military, reflecting society as a whole, still struggled with hate groups and racist violence.\r\nExperts generally agree that the problem is more widespread than the military acknowledges.\r\nIn 1995, after the Oklahoma City bombing and the killing … [+1507 chars]",
    "createdAt": "2019-03-04T02:29:14.966Z",
    "updatedAt": "2019-03-04T02:29:14.966Z"
  },
*/
