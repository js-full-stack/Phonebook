import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../Components/Loader';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.auth.loading);

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { name, email, password };
    dispatch(authOperations.register(payload));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <ToastContainer autoClose={3000} transition={Zoom} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h4>Please, enter your registration details</h4>

          <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Имя
              <input type="text" name="name" value={name} onChange={handleChangeName} />
            </label>

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

            <button type="submit">Зарегистрироваться</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
