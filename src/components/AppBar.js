import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../logo.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: "transparent",
		color: "black",
		boxShadow: "1px 0px 0px 0px",
	},

	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		placeholder: "Search",
		position: "relative",
		borderRadius: "50px",
		color: "gray",
		backgroundColor: "#f2f2f2",
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "500%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "gray",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

const PrimarySearchAppBar = (props) => {
	const classes = useStyles();

	const history = useHistory();

	const [query, setQuery] = useState("");

	return (
		<div className={classes.grow}>
			<AppBar position='static' className={classes.header}>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='open drawer'>
						<img src={logo} alt='' width='50px' />
					</IconButton>
					<Typography
						className={classes.title}
						variant='h6'
						style={{
							backgroundColor: "black",
							borderRadius: "20px",
							color: "white",
							padding: "9px",
						}}>
						Home
					</Typography>

					<div
						className={classes.search}
						style={{ width: "80%", paddingLeft: "10px" }}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							onChange={(e) => {
								setQuery(e.target.value);
								props.onChange(e.target.value);
							}}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton aria-label='show 4 new mails' color='inherit'>
							<Badge badgeContent={4} color='secondary'>
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton aria-label='show 17 new notifications' color='inherit'>
							<Badge badgeContent={17} color='secondary'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-haspopup='true'
							color='inherit'>
							<AccountCircle
								onClick={() => {
									history.push("/");
								}}
							/>
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='show more'
							aria-haspopup='true'
							color='inherit'>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default PrimarySearchAppBar;
