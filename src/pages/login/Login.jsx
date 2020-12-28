import React from "react";
import { Route, Switch, useRouteMatch, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LostPass from "./LostPass";
import NewUser from "./NewUser";
import ResetPass from "./ResetPass";

const Login = () => {
  let match = useRouteMatch();
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/profile" />

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
