import React, { Component } from 'react';
import Axios from 'axios';

// components
import Link from '../components/Link/Link';
import AllNews from '../components/AllNews/AllNews';
import { request } from 'https';

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

    Axios.defaults.baseURL = `localhost:${process.env.SERVER_PORT}`;
    // Axios.defaults.baseURL =
  }

  componentDidMount() {
    // this.getNews();
    console.log(Axios.defaults.baseURL);
  }

  getNews() {
    Axios.get('/all').then(res => {
      console.log(res.data);
      this.setState({
        news: res.data,
      });
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(`information submitted, ${this.state.value}`);
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Article:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>
            <AllNews />
          </div>
        </div>
      </div>
    );
  }
}
