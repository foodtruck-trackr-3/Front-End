import React, { useState } from 'react';
import './App.css';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar'
import Backdrop from './components/Backdrop/Backdrop'

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
      <Toolbar drawerClickHandler={drawerTogglerHandler} />
      <SideDrawer show={sideDrawerOpener} />
      <Backdrop drawerClose={drawerCloser} />
      The Content of The Page</main>
    </div>
  );
}

export default App;
