import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Emails from './Emails';

function App() {
  return (
    <div className="App">
    <Header/>
   <div className="App__body">
   <SideBar />
    <Emails  />
   </div>
    </div>
  );
}

export default App;
