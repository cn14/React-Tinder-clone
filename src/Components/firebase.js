import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBKSZZyowLh1bbKngPmgluxOtC_J0ZvzQs',
	authDomain: 'tinder-clone-d459d.firebaseapp.com',
	databaseURL: 'https://tinder-clone-d459d.firebaseio.com',
	projectId: 'tinder-clone-d459d',
	storageBucket: 'tinder-clone-d459d.appspot.com',
	messagingSenderId: '306467565062',
	appId: '1:306467565062:web:f889e6df064812e59b5d87',
	measurementId: 'G-2M5HXHTQYP',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
