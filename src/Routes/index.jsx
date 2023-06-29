import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
