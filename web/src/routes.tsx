import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// Pages
import Landing 	from './pages/Landing';
import About 	from './pages/About';
import Store 	from './pages/Store';

function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/store" exact component={Store} />
				<Route path="/about" exact component={About} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;