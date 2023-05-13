import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
  //StrictMode renderizar dos veces la pag y ayuda a encontrar errores
  //BrowserRouter administra las rutas de la app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
