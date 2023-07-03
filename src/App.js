import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/lessons" exact />
        <Route path="/challenges" exact />
        <Route path="/discuss" exact />
        <Route path="/sign-up" exact />
      </Switch>
    </Router>
  );
}

export default App;
