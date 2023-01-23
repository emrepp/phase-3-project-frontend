import React from 'react';
import ReactDOM from 'react-dom';



function App {
    return (
      <div id="app">
        {this.props.children}
      </div>
    )
  }

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="signup" component={Signup}/>
      <Route path="login" component={Login}/>
      <Route path="lists" component={Lists}>
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));

export default App;