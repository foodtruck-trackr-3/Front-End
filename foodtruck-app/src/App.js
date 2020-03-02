import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar'
import Backdrop from './components/Backdrop/Backdrop'
import Login from './components/Login';
import Trucklist from './components/Trucklist';
import Register from './components/Register';


function App() {
  const [sideDrawerOpener, setsideDrawerOpener] = useState(false);
  const drawerTogglerHandler = () => {
    setsideDrawerOpener(prevState => ({
      ...prevState,
      sideDrawerOpener: !setsideDrawerOpener
    }));
  };

  const drawerCloser = () => {
    setsideDrawerOpener(false);
  };

  return (
    <div className="App">
      <main style={{ marginTop: "58px" }}>
      <Route exact path="/" component={Trucklist} />  
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Toolbar drawerClickHandler={drawerTogglerHandler} />
      <SideDrawer show={sideDrawerOpener} />
      <Backdrop drawerClose={drawerCloser} />
      </main>
      
    </div>
  );
}

export default App;
