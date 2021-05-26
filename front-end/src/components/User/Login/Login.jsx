import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import api from '../../../services/api';

import './Login.css';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {

      const response = await api.post('auth', { email, password });
      console.log(response.data);
      const { token } = response.data;
      console.log(token)
      if (token) {
        setToken(token);
        return history.push('/dashboard');
      }

    } catch (err) {
      return alert(err);
    }
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope" onSubmit={handleLogin}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email"
            type="text"
            name="email"
            autoComplete="off"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
