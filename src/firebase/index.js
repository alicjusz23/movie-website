// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js"></script>
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCmFzsK10Sxec1XDJbFNnSSmtBkujf0mGU",
  authDomain: "movie-website-c8ba7.firebaseapp.com",
  databaseURL: "https://movie-website-c8ba7.firebaseio.com",
  projectId: "movie-website-c8ba7",
  storageBucket: "movie-website-c8ba7.appspot.com",
  messagingSenderId: "692704263029",
  appId: "1:692704263029:web:8ffd555c259094c90af13c",
  measurementId: "G-S1DMZ5T9Z4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
