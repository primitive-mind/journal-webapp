import React from 'react';
// import './App.css';
// import browserHistory from 'history';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home'
import File from './pages/File'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
	  	<Switch>
	  		<Route exact path='/' component={Home} />
	  		<Route path='/files/:fileId' component={File} />
	  		<Route component={NotFound} />
	  	</Switch>
		</Router>
  );
}

export default App;
