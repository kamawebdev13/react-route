
import { Navigate, Outlet } from 'react-router-dom';

interface User {
  role: 'admin' | 'user';
}

interface Props {
  user: User | null;
  requiredRole?: 'admin' | 'user';
  children: React.ReactNode; // Los componentes hijos que se renderizarán si el usuario tiene acceso
}

export const ProtectedRoute = ({ user, requiredRole }: Props) => {
    // si no esta permitido lo enviamos al Login inmediatamente
  if (!user) return <Navigate to="/login" replace />;
 //// Usamos replace para que no pueda usar el botón de "Atras" del navegado y volver a la ruta prohibida
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/denegado" replace />;
  }

  return <Outlet />;
};