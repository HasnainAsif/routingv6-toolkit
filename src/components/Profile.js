import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/user';

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutBtn = (e) => {
    e.preventDefault();
    dispatch(logout());

    // for redirection we can use this code
    // It is like history.push
    navigate('/');
  };

  const toTaskPageBtn = (e) => {
    e.preventDefault();

    // for redirection we can use this code
    // It is like history.push
    navigate('/task');
  };

  const toNextPageBtn = (e) => {
    e.preventDefault();

    // for going forward to next page
    navigate(1);
  };

  //   if (!user) {
  //     return <Navigate to='/' />;
  //   }

  return (
    <>
      <div>
        <h1>Profile Page</h1>
        <p>Name: {user?.name}</p>
        <p>Age: {user?.age}</p>
        <p>Email: {user?.email}</p>
      </div>

      <button onClick={logoutBtn}>LOGOUT</button>
      <button onClick={toTaskPageBtn}>GO TO TASK PAGE</button>
      <button onClick={toNextPageBtn}>GO TO NEXT PAGE</button>
    </>
  );
};

export default Profile;
