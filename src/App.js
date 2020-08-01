import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TinderCards from './Components/TinderCards';
import Chats from './Components/Chats';
import ChatScreen from './Components/ChatScreen';
function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<ChatScreen />
					</Route>
					<Route exact path="/">
						<Header />
						<TinderCards />
					</Route>
					<Route path="/chat">
						<Header backButton="/" />
						<Chats />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
