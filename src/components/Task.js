import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const goBackBtn = (e) => {
    e.preventDefault();

    // for going back to previous page
    navigate(-1); // if we write -2, then it will go two pages back
  };

  return (
    <>
      <div>
        <h1>Task Page</h1>
      </div>

      <button onClick={goBackBtn}>GO BACK</button>
    </>
  );
};

export default Profile;
