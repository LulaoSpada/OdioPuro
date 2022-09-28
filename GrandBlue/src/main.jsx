import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cadastro } from './Pages/Cadastro/Cadastro.jsx'
import { Login } from './Pages/Login/Login.jsx'
import GlobalStyle from './Styles/global.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cadastro />
    <GlobalStyle />
    
  </React.StrictMode>
)
