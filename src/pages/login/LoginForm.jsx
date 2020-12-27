import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useForm from "../../hooks/useForm";
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { UserLogin } = React.useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      UserLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Login</Button>
      </form>
      <Link to="/login/newUser">Ainda não tem um cadastro?</Link>
    </section>
  );
};

export default LoginForm;
