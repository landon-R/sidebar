import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyCVfYNhYWSdoWdG3F5nK7RGDsLRXC1gd4Y",
  authDomain: "rolandodb-905e5.firebaseapp.com",
  databaseURL: "https://rolandodb-905e5.firebaseio.com",
  projectId: "rolandodb-905e5",
  storageBucket: "rolandodb-905e5.appspot.com",
  messagingSenderId: "259757317884",
  appId: "1:259757317884:web:d3538b3f3376026cf70179",
  measurementId: "G-05X14P4BST",
};

var fire = firebase.initializeApp(firebaseConfig)
export default fire

console.log(fire)




