import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../Providers/UserContext';

const PublicRoutes = () => {
  const { user } = useUserContext();

  return !user ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default PublicRoutes;
