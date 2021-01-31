import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
function UserVerified() {
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
					<h2 style={{ color: "skyblue" }}>User Verified</h2>
					<Link to='/' style={{ color: "black" }}>
						<h5>Log in</h5>
					</Link>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default UserVerified;
