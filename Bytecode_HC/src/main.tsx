import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './globals.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Acesso from './routes/Acesso/index';
import Calendario from './routes/Calendario/index';
import Contato from './routes/Contato/index';
import Home from './routes/Home/index';
import Integrantes from './routes/Integrantes/index';
import FAQ from './routes/FAQ/index';
import Sobre from './routes/Sobre/index';
import Teleconsulta from './routes/Teleconsulta/index';
import Erro from './routes/Error/index';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,errorElement: <Erro/> ,children: [
      {path: "/", element: <Home />},
      {path: "/acesso", element: <Acesso />},
      {path: "/calendario", element: <Calendario />},
      {path: "/contato", element: <Contato />},
      {path: "/sobre", element: <Sobre />},
      {path: "/teleconsulta", element: <Teleconsulta />},
      {path: "/integrantes", element: <Integrantes />},
      {path: "/faq", element: <FAQ />}
    ]
  }
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)