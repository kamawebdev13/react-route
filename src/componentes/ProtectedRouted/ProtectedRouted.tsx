
import { Navigate, Outlet } from 'react-router-dom';

interface User {
  role: 'admin' | 'user';
}

interface Props {
  user: User | null;
  requiredRole?: 'admin' | 'user';
}

export const ProtectedRoute = ({ user, requiredRole }: Props) => {
  if (!user) return <Navigate to="/login" />;

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/denegado" />;
  }

  return <Outlet />;
};