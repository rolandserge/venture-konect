import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./sass/app.scss"
import "./i18n.ts"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { AxiosProvider } from './context/axiosContext.tsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <AxiosProvider>
        <App />
        <ToastContainer position="bottom-right" />
      </AxiosProvider>
    </MantineProvider>
  </StrictMode>
)
