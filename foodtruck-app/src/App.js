import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { trucksReducer as reducer } from './reducers';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar'
import Backdrop from './components/Backdrop/Backdrop'
import Login from './components/Login';
import Trucklist from './components/Trucklist';
import AddTruck from './components/AddTruck';
import Register from './components/Register';

const store = createStore(reducer, applyMiddleware(thunk));


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
    <Provider store={store}>
      <div className="App">
        <main style={{ marginTop: "58px" }}>
        <Route exact path="/" component={Login} />  
        <ProtectedRoute exact path="/trucks" component={Trucklist} />
        <ProtectedRoute exact path="/addtruck" component={AddTruck} />
        <Route exact path="/register" component={Register} />
        <Toolbar drawerClickHandler={drawerTogglerHandler} />
        <SideDrawer show={sideDrawerOpener} close={drawerCloser} />
        <Backdrop drawerClose={drawerCloser} />
        </main>
      </div>
    </Provider>
  );
}

export default App;
