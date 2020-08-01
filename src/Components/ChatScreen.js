import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
const ChatScreen = () => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([
		{
			name: 'ellen',
			image: '...',
			message: 'whatsup',
		},
		{
			name: 'ellen',
			image: '...',
			message: 'hjooo',
		},
		{
			message: 'hello',
		},
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setMessages([...messages, { message: input }]);
		setInput('');
	};
	return (
		<div className="chatScreen">
			<p>YOU MATCHED WITH ELLEN</p>
			{messages.map((message) =>
				message.name ? (
					<div className="chatScreen__message">
						<Avatar
							className="chatScreen__image"
							alt={message.name}
							src={message.image}
						/>
						<p className="chatScreen__text">{message.message}</p>
					</div>
				) : (
					<div className="chatScreen__message">
						<p className="chatScreen__textUser">
							{message.message}
						</p>
					</div>
				)
			)}
			<div>
				<form className="chatScreen__input">
					<input
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						className="chatScreen__inputField"
						placeholder="Type a message..."
						type="text"
					/>
					<button
						type="submit"
						onClick={handleSubmit}
						className="chatScreen__btn"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatScreen;
