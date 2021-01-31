import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
const axios = require("axios");
function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		ForgotPassword();
	};
	const history = useHistory();

	const ForgotPassword = () => {
		setLoading(true);
		axios
			.post("http://localhost:5000/forgotPassword", {
				username: email,
			})
			.then(function (response) {
				console.log(response);
				if (response.data.linkSent) {
					history.push("/linkSent");
				}
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

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avatar alt='Remy Sharp' src={logo} />
					<h1>Welcome To Pinterest</h1>
					<u>
						<h4>Let's find your Pinterest account</h4>
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
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>

						<h4 align='left'>
							<Link to='/' style={{ color: "black" }}>
								Go Back
							</Link>
						</h4>
						<Button
							variant='contained'
							color='primary'
							fullWidth
							style={buttonStyle}
							type='submit'
							disabled={loading}>
							Reset
						</Button>
						<hr style={hrStyle} />
					</form>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default ForgotPassword;
