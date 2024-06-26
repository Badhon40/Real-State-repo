import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import FirebaseProvider from './authProvider/FirebaseProvider'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <FirebaseProvider>
    <RouterProvider router={Routes}>

    </RouterProvider>
    </FirebaseProvider></HelmetProvider>
  </React.StrictMode>,
)
