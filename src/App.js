import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      test: "hello",
      quote:''

    }
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response=> response.json())
    .then(data => {
      this.setState({ quote: data.value})});
  }

  render(){
    const {quote} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="chucknorris.jpg"  alt="logo" />
          <p>
            *{quote}* <br/><br/> <a href="https://zhczhen.github.io/chuck-norris/">Refresh</a> to get new chucknorris quote.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
