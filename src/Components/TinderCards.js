import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import db from './firebase';
import './TinderCards.css';
import SwipeButtons from './SwipeButtons';
const TinderCards = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const unsubscribe = db
			.collection('people')
			.onSnapshot((snapshot) =>
				setPeople(snapshot.docs.map((doc) => doc.data()))
			);

		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<div className="tinder__cardContainer">
			{people.map((person) => (
				<TinderCard
					className="swipe"
					key={person.name}
					preventSwipe={['up', 'down']}
				>
					<div
						style={{ backgroundImage: `url(${person.url})` }}
						className="card"
					>
						<h3>{person.name}</h3>
					</div>
				</TinderCard>
			))}
			<SwipeButtons />
		</div>
	);
};

export default TinderCards;
