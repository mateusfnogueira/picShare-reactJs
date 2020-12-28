import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <Router>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </UserStorage>
    </div>
  );
}

export default App;
