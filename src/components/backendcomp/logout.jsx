import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userslice'; // Path ko aapke project ke hisaab se adjust karein

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
