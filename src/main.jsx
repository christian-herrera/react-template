import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'

import AuthProvider from './contexts/AuthContext'
const AppRouter = lazy(() => import('./routes/AppRouter'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);
