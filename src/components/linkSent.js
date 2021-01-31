import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
function LinkSent() {
	const textStyle = {
		margin: "8px 0px",
	};

	const paperStyle = {
		padding: "30px 80px",
		heigth: "90vh",
		width: 350,
		margin: " 10% auto",
		borderRadius: "15px",
	};

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avatar alt='Remy Sharp' src={logo} />
					<h1>Welcome To Pinterest</h1>
					<h2 style={{ color: "#be0216" }}>Please Check Your Mail!!</h2>
					<h3 style={{ color: "skyblue" }}>
						We have sent you a verfication mail.
					</h3>
					<Link to='/' style={{ color: "black" }}>
						<h5>Already a member? Log in</h5>
					</Link>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default LinkSent;
