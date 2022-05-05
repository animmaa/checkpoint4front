import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../context/LoginProvider';

const AdminRoutes = () => {
  const { admin } = useLogin();
  return admin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoutes;
