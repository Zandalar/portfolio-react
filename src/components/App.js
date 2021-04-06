import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function App() {



	return (
	  <div className='page'>
		  <Header />
		  <Main />
		</div>
	)
}

export default App;
