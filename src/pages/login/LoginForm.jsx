import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Error from '../../components/helper/Error';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
            <Button>Login</Button>
          )}
        <Error error={error} />
      </form>
      <Link className={styles.lostPass} to='/login/lostPass'>
        Esqueceu a senha?
      </Link>
      <div className={styles.divNewUser}>
        <p className={styles.textNewUser}>Ainda não possui uma conta?</p>
        <Link className={styles.buttoNewUser} to='/login/newUser'>
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
