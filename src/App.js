import React, { Component } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import {fetchReasons} from './services/ReasonsService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.fetchNewReasons = this.fetchNewReasons.bind(this);
  }
  fetchNewReasons() {
    fetchReasons()
      .then(data => {
        this.setState({
          people: data.results
        });
      });
  }
  render() {
    return (
      <div className="App">
        <ul className="allMembers">
          <MemberList people = {this.state.people} />
        </ul>
        <button onClick= {this.fetchNewReasons} type= "button">Buscar</button>
      </div>
    );
  }
}

export default App;
