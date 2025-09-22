// firebase.js

// Paste your Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123456:web:abcdef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export database reference
const db = firebase.database();
