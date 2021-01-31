import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Pins from "./components/Pins";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Invalid from "./components/invalid";
import ResetPassword from "./components/resetPassword";
import LinkSent from "./components/linkSent";
import UserVerfied from "./components/userVerified";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<div>
					<Switch>
						<Route exact path='/' component={LoginForm}></Route>
						<Route path='/passwordReset' component={ForgotPassword}></Route>
						<Route path='/signUp' component={SignUpForm}></Route>
						<Route path='/invalid' component={Invalid}></Route>
						<Route path='/resetPassword' component={ResetPassword}></Route>
						<Route path='/pins' component={Pins}></Route>
						<Route path='/linkSent' component={LinkSent}></Route>
						<Route path='/userVerified' component={UserVerfied}></Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
