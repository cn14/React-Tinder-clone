import React from 'react';
import './Chats.css';
import Chat from './Chat';
const Chats = () => {
	return (
		<div className="chats">
			<Chat
				name="mark"
				message="hi how r u"
				timestamp="40 sec ago"
				profilePic="..."
			/>
			<Chat
				name="mark"
				message="hi how r u"
				timestamp="40 sec ago"
				profilePic="..."
			/>
			<Chat
				name="mark"
				message="hi how r u"
				timestamp="40 sec ago"
				profilePic="..."
			/>
		</div>
	);
};

export default Chats;
