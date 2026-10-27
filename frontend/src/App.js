import React, {Fragment} from  'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/auth/Login';
import CrearCuenta from './pages/auth/UserCuenta';

function App() {
  return (
    <Fragment>
      <BrowserRouter> 
        <Routes> // Routes: contiene las rurtas
          <Route path="/" exact element={<Login />} /> // Route: asocia URL con componente
          <Route path="/crear-cuenta" exact element={<CrearCuenta />} />    
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
