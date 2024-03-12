import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Verifica se os valores de e-mail e senha são válidos
    if (email === 'bruno.franco@pucpr.br' && password === '123456') {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Acessar</button>
      <br />
      <label>{message}</label>
    </div>
  );
};

export default LoginComponent;