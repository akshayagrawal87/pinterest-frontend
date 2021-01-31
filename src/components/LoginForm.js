import React, { useState, useEffect } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core/styles";
import {
	BrowserRouter,
	Link,
	Switch,
	Route,
	Redirect,
	useHistory,
} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { TrafficOutlined } from "@material-ui/icons";
const axios = require("axios");

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [logged, setLogged] = useState(false);
	const [error, setError] = useState("");
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Email:", email, "Password: ", password);
		Login(email, password);
		if (logged) {
			history.push("/pins");
		}
	}

	useEffect(() => {
		axios.get("http://localhost:5000/login").then(function (response) {
			if (response.data.loggedIn) {
				setLogged(response.data.loggedIn);
				history.push("/pins");
			}
		});
	}, []);

	const Login = (email, password) => {
		setLoading(true);
		axios
			.post("http://localhost:5000/login", {
				username: email,
				password: password,
			})
			.then(function (response) {
				setLogged(response.data.loggedIn);
				setError(response.data.message);
			});
		setLoading(false);
	};

	const textStyle = {
		margin: "8px 0px",
	};

	const hrStyle = {
		color: "gray",
		width: "120px",
	};

	const paperStyle = {
		padding: "30px 80px",
		heigth: "90vh",
		width: 350,
		margin: " 10% auto",
		borderRadius: "15px",
	};

	const buttonStyle = {
		backgroundColor: "#be0216",
		padding: "5px 0px",
		margin: "8px 0px",
		borderRadius: "20px",
		height: "45px",
	};

	const validate = () => {
		if (error != "Login Sucess!") {
			let temp = {};
			temp.email = /$|.+@.+..+/.test(email) ? "" : "Email is not valid";
			temp.password = password ? "" : "This field is required";
			setErrors(...temp);
		}
	};

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avatar alt='Remy Sharp' src={logo} />
					<h1>Welcome To Pinterest</h1>
					<form noValidate autoComplete='off' onSubmit={handleSubmit}>
						<TextField
							id='outlined-basic'
							label='Email'
							type='email'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							value={email}
							onInput={(e) => setEmail(e.target.value)}
						/>
						<TextField
							id='outlined-basic'
							label='Password'
							type='password'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							value={password}
							onInput={(e) => setPassword(e.target.value)}
						/>
						<h4 align='left'>
							<Link to='/passwordReset' style={{ color: "black" }}>
								Forgotten your password?
							</Link>
						</h4>
						<Button
							variant='contained'
							type='submit'
							color='primary'
							fullWidth
							style={buttonStyle}
							disabled={loading}>
							Log in
						</Button>
						<hr style={hrStyle} />
						<h5>
							<Link to='/signUp' style={{ color: "black" }}>
								Not on Pinterest yet? Sign-up
							</Link>
						</h5>
					</form>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default LoginForm;
