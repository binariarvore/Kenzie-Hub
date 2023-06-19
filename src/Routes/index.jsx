import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

const RoutesMain = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path='/' element={<Login setUser={setUser} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard user={user} />} />
    </Routes>
  );
};

export default RoutesMain;
