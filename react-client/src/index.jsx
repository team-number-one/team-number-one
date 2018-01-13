import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchPage from './containers/SearchPage.jsx';
import HomePage from './containers/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 0,
      userinfo: {},
      inputValue: '',
      squeaks: [{
        username: 'Moisays',
        displayName: 'MoisesM',
        text: 'things are awesome'
      },
      {
        username: 'FelIs',
        displayName: 'Feli Catania',
        text: 'coding is cool I guess'
      }]
    };
  }

  searchHandler() {
    if (this.state.inputValue.length > 0) {
      this.props.history.push(`/search?q=${this.state.inputValue}`);
      this.setState({inputValue: ''});
    }
  }

  componentDidMount() {
    let settings = {
      url: '/api/userinfo/1',
      method: 'GET',
      contentType: "application/json",
    }

    $.ajax(settings).done(data => {
      this.setState({userinfo: data});
    });
  }

  onInputChangeHandler(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div id="reactapp">
        <NavBar
          fixedTop="true"
          className="squeaker-nav"
          shouldReplace={this.props.location.pathname === '/'}
          inputValue={this.state.inputValue}
          searchHandler={this.searchHandler.bind(this)}
          onChangeHandler={this.onInputChangeHandler.bind(this)}/>
        <Switch>
          <Route exact path="/" render={props => (<HomePage/>)}/>
          {/* <Route exact path="/" render={props => (
            this.state.loggedIn ? (
              <Redirect to="/login"/>
            ) : (
              <HomePage/>
            )
          )}/> */}
          <Redirect from="/find" to="/search"/>
          <Route path="/search" render={props => (<SearchPage {...props.location}/>)}/>
          <Route path="/login" render={props => (<LoginPage/>)}/>
          <Route path="/:username" render={props => (<HomePage username={props.match.params.username}/>)}/>
        </Switch>
      </div>
    );
  }
}


App = withRouter(App);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>, document.getElementById('app')
// );

