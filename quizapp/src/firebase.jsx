// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAFA5Ba91U2zxHR1JdwZuKlX5tEsEO7eiE",
	authDomain: "quiz-dev-b6a54.firebaseapp.com",
	projectId: "quiz-dev-b6a54",
	storageBucket: "quiz-dev-b6a54.appspot.com",
	messagingSenderId: "242812636561",
	appId: "1:242812636561:web:637d95d3d4eef026e49e30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
