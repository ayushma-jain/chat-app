import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import ChatPage from './components/ChatPage.js';


function App() {
  return (

    <div className="App" >
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <SignIn heading="Sign In"/>
        </div>
        <div className="col-lg-4 col-sm-12">
          <SignUp />
        </div>
        <div className="col-lg-4 col-sm-12">
          <ChatPage />
        </div>
      </div>

    </div >
  );
}

export default App;
