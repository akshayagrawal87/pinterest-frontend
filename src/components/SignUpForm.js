import React, { useRef, useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Link, Switch, Route, Redirect,useHistory } from "react-router-dom";
const axios = require("axios");

function SignUpForm() {
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [confirmPassword,setConfirmPassword] = useState("");
	const [age,setAge] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const signUp=(obj)=>{

		axios
			.post("http://localhost:5000/register", {
				username: email,
				password: password,
				age:age
			})
			.then(function (response) {
				console.log(response);
				if(response.data.created){
	history.push("/linkSent");
				}
			
			});



		}

	const handleSubmit = async(event) => {

		console.log(password)
		event.preventDefault();

		if (password !== confirmPassword) {
			return setError("Passwords do not match");
		}
		else{

console.log(email)
			await signUp();


		}
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

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avatar alt='Remy Sharp' src={logo} />
					<h1>Welcome To Pinterest</h1>
					<u>
						<h4>Find new ideas to try</h4>
					</u>
					<form noValidate autoComplete='off' onSubmit={handleSubmit}>
						<TextField
							id='outlined-basic'
							label='Email'
							type='email'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							placeholder='Email Address'
							onChange={(e)=>{setEmail(e.target.value)}}
						/>
						<TextField
							id='outlined-basic'
							label='Password'
							type='password'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							placeholder='Create a password'
							onChange={(e)=>{setPassword(e.target.value)}}
						/>

						<TextField
							id='outlined-basic'
							label='Confirm Password'
							type='password'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							placeholder='Confirm password'
							onChange={(e)=>{setConfirmPassword(e.target.value)}}
						/>

						<TextField
							id='outlined-basic'
							label='Age'
							type='text'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							placeholder='Age'
							onChange={(e)=>{setAge(e.target.value)}}
						/>

						<Button
							variant='contained'
							color='primary'
							fullWidth
							style={buttonStyle}
							type='submit'
							disabled={loading}>
							Continue
						</Button>
						<hr style={hrStyle} />
						<p>
							By continuing, you agree to Pinterest's
							<b> Terms of Service, Privacy Policy.</b>
						</p>

						<Link to='/' style={{ color: "black" }}>
							<h5>Already a member? Log in</h5>
						</Link>
					</form>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default SignUpForm;
