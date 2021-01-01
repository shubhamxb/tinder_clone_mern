import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">

      {/*--Header--*/}
      <Header />

      {/*--TinderCards--*/}
      <TinderCards/>

      {/*--SwipeButtons--*/}
      <SwipeButtons />
    </div>
  );
}

export default App;

var firebaseConfig = {
  apiKey: "AIzaSyA8NZZO8_ok7hEFRCM7QrgicU_2bOjSGMo",
  authDomain: "tinder-clone-v0.firebaseapp.com",
  projectId: "tinder-clone-v0",
  storageBucket: "tinder-clone-v0.appspot.com",
  messagingSenderId: "808226399243",
  appId: "1:808226399243:web:b98be3215ec6c2b562530e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);