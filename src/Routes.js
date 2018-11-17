import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App.js";
import Homepage from "./Homepage.js";
import Login from "./LoginPage";

const Routes = () => (
	<App>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/Login" component={Login} />
		</Switch>
	</App>
);

export default Routes;
