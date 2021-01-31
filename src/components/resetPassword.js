import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
const axios = require("axios");
function ResetPassword() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) changePassword();
	};

	const changePassword = () => {
		axios
			.post("http://localhost:5000/forgotPassword/changePassword", {
				username: email,
				password: password,
			})
			.then(function (response) {
				console.log(response.data);
				if (response.data.changed) {
					history.push("/");
				} else {
					history.push("/invalid");
				}
			});
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
						<h4>Reset Password</h4>
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
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<TextField
							id='outlined-basic'
							label='Password'
							type='password'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							placeholder='Create new password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>

						<TextField
							id='outlined-basic'
							label='Confirm Password'
							type='password'
							variant='outlined'
							fullWidth
							required
							style={textStyle}
							placeholder='Confirm new password'
							onChange={(e) => {
								setConfirmPassword(e.target.value);
							}}
						/>

						<Button
							variant='contained'
							color='primary'
							fullWidth
							style={buttonStyle}
							type='submit'>
							Change Password
						</Button>
						<hr style={hrStyle} />

						<Link to='/' style={{ color: "black" }}>
							<h5>Cancel</h5>
						</Link>
					</form>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default ResetPassword;
