import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProtectedRoute } from './componentes/ProtectedRouted/ProtectedRouted';

export default function AppTwo() {
  const [user, setUser] = useState<{ name: string; role: 'admin' | 'user' } | null>(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
        {/* Navbar con Tailwind */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="space-x-4">
            <Link to="/" className="text-blue-600 font-bold hover:underline">Inicio</Link>
            <Link to="/perfil" className="hover:text-blue-500">Perfil</Link>
            <Link to="/admin" className="hover:text-red-500">Panel Admin</Link>
          </div>

          <div className="flex gap-2">
            {!user ? (
              <>
                <button onClick={() => setUser({ name: 'Karina', role: 'user' })} 
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  Login User
                </button>
                <button onClick={() => setUser({ name: 'Ultimate boss', role: 'admin' })} 
                  className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition">
                  Login Admin
                </button>
              </>
            ) : (
              <button onClick={() => setUser(null)} 
                className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50">
                Cerrar Sesión ({user.role})
              </button>
            )}
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="p-8 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold">Bienvenido a la App Pública</h1>} />
            <Route path="/login" element={<h1 className="text-2xl text-orange-500">Por favor, elige un rol arriba para entrar.</h1>} />
            <Route path="/denegado" element={
              <div className="bg-red-100 border-l-4 border-red-500 p-4 text-red-700">
                <p className="font-bold">Acceso Denegado</p>
                <p>No tienes permisos de administrador para ver esto.</p>
              </div>
            } />

            {/* Rutas Protegidas */}
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/perfil" element={<h1 className="text-2xl">Hola {user?.name}, este es tu perfil.</h1>} />
            </Route>

            <Route element={<ProtectedRoute user={user} requiredRole="admin" />}>
              <Route path="/admin" element={
                <div className="bg-purple-100 p-6 rounded-lg shadow-inner">
                  <h1 className="text-2xl font-black text-purple-800">PANEL DE CONTROL SUPREMO</h1>
                  <p className="mt-2">Solo tú puedes ver esto porque eres Admin.</p>
                </div>
              } />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}