import React from 'react';
import './Header.css';
import { NavLink, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Header = ({ backButton }) => {
	const history = useHistory();
	return (
		<div className="header">
			{backButton ? (
				<IconButton onClick={() => history.replace(backButton)}>
					<ArrowBackIosIcon
						fontSize="large"
						className="header__icons"
					/>
				</IconButton>
			) : (
				<IconButton>
					<PersonIcon fontSize="large" className="header__icons" />
				</IconButton>
			)}

			<NavLink to="/">
				<img
					className="header__logo"
					src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
					alt="tinder"
				/>
			</NavLink>
			<NavLink to="/chat">
				<IconButton>
					<ForumIcon fontSize="large" className="header__icons" />
				</IconButton>
			</NavLink>
		</div>
	);
};

export default Header;
