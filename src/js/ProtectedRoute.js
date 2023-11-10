import React from 'react';
import { useAuth } from '../token/Auth';
import { Route ,Navigate } from 'react-router-dom';

function ProtectedRoute({ element, adminRequired }) {
  const { state } = useAuth();

  if (state.isAuthenticated) {
    if (adminRequired && state.isAdmin) {
      return <Route element={element} />;
    } else if (!adminRequired) {
      return <Route element={element} />;
    }
  }

  return <Navigate to="/Login" />;
}

export default ProtectedRoute; // Asegúrate de exportar el componente

