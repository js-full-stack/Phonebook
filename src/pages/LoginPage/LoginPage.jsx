import styles from './LoginPage.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../Components/Loader';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.auth.loading);

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { email, password };
    dispatch(authOperations.logIn(payload));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {!!isLoading ? (
        <Spinner />
      ) : (
        <div>
          <ToastContainer autoClose={3000} transition={Zoom} />
          <h4>Please, enter your login details</h4>

          <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>

            <label className={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
              />
            </label>

            <button type="submit">Войти</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
