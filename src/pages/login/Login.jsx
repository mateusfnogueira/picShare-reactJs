import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LostPass from "./LostPass";
import NewUser from "./NewUser";
import ResetPass from "./ResetPass";

const Login = () => {
  let match = useRouteMatch();
  return (
    <div className={styles.login}>
      <Switch>
        <Route path={`${match.path}/resetPass`}>
          <ResetPass />
        </Route>
        <Route path={`${match.path}/lostPass`}>
          <LostPass />
        </Route>
        <Route path={`${match.path}/newUser`}>
          <NewUser />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
