import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginBtn = (e) => {
    e.preventDefault();
    dispatch(
      login({ name: 'Anonymous', age: 24, email: 'anonymous@gmail.com' })
    );

    // for redirection we can use this code.
    // It is like history.push()
    navigate('/profile');
    // window.location.href = '/profile';
  };

  return (
    <div>
      <button onClick={loginBtn}>LOGIN</button>
    </div>
  );
};

export default Login;
