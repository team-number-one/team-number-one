import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Feed from './components/feed.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      squeaks: [{
        username: 'Henry Chesnutt',
        displayName: '@hesnutt',
        text: 'IM A PIRANNA'
      },
      {
        username: 'Feli Cananga',
        displayName: 'SPECTRE',
        text: 'You are all going to die.'
      }]
    };
  }

  searchHandler() {
    if (this.state.inputValue.length > 0) {
      this.props.history.push(`/search?q=${this.state.inputValue}`);
      this.setState({inputValue: ''});
    }
  }

  onInputChangeHandler(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div>
        <NavBar inputValue={this.state.inputValue}
          searchHandler={this.searchHandler.bind(this)}
          onChangeHandler={this.onInputChangeHandler.bind(this)}/>
        <Switch>
          <Route exact path="/" render={props => (<span>Home Page</span>)}/>
          <Route path="/search" render={props => (<span>Search Results Page for {props.location.search.slice(3) /* getting rid of '?q=' that why I start from three */}</span>)}/>
          <Route path="/login" render={props => (<span>Login Page</span>)}/>
          <Route path="/:username" render={props => (<span>{props.match.params.username}'s Profile Page</span>)}/>
        </Switch>
      </div>
    );
  }
}

App = withRouter(App);


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'));