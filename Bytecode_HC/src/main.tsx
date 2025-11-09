import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App'
import { AuthProvider } from './contexts/AuthProvider';
import './globals.css'

import Acesso from './routes/Acesso/index';
import Calendario from './routes/Calendario/index';
import Contato from './routes/Contato/index';
import Home from './routes/Home/index';
import Integrantes from './routes/Integrantes/index';
import FAQ from './routes/FAQ/index';
import Sobre from './routes/Sobre/index';
import Teleconsulta from './routes/Teleconsulta/index';
import Erro from './routes/Error/index';
import DetalhesConsulta from "./routes/DetalhesConsulta";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/acesso", element: <Acesso /> },
      { path: "/calendario", element: <Calendario /> },
      { path: "/contato", element: <Contato /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/teleconsulta", element: <Teleconsulta /> },
      { path: "/detalhes-consulta/:id", element: <DetalhesConsulta />},
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);