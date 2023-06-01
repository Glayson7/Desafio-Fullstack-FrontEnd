import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clientes from './components/Clientes';
import AdicionarCliente from './components/AdicionarCliente';
import EditarCliente from './components/EditarCliente';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/adicionar" element={<AdicionarCliente />} />
        <Route path="/editar/:id" element={<EditarCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
