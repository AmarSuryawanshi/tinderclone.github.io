import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chat page</h1>
          </Route>
          {/* Always set default route at the bottom */}
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        {/* tinder cards */}
        {/* Buttons below tinder cards */}

        {/* chats screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
