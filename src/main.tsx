import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./sass/app.scss"
import { APIProvider } from '@vis.gl/react-google-maps'


console.log(import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <App />
    </APIProvider>
  </StrictMode>,
)
