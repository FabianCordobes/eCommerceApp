import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: 'AIzaSyDMu3vNnqgur7s3b8Tf5zensAPmiLgO3wY',
	authDomain: 'eshop-df1f3.firebaseapp.com',
	projectId: 'eshop-df1f3',
	storageBucket: 'eshop-df1f3.appspot.com',
	messagingSenderId: '1047488777553',
	appId: '1:1047488777553:web:11ebc6b657aedfc77d5770',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const bd = getFirestore(app);
export const storage = getStorage(app);

export default app;
