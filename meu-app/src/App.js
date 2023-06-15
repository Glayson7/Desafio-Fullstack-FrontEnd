import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clientes from './components/Clientes';
import AdicionarCliente from './components/AdicionarCliente';
import EditarCliente from './components/EditarCliente';
import Contatos from './components/Contatos';
import AdicionarContato from './components/AdicionarContato';
import EditarContato from './components/EditarContato';
import ExcluirContato from './components/ExcluirContato';






const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Clientes/>} />
        <Route path="/adicionar" element={<AdicionarCliente/>} />
        <Route path="/editar/:id" element={<EditarCliente/>} />
        <Route path="/clientes/:idCliente/contatos" element={<Contatos/>} />
        <Route
          path="/clientes/:idCliente/adicionarContato"
          element={<AdicionarContato/>}
        />
        <Route
          path="/clientes/:idCliente/contatos/:idContato/editar"
          element={<EditarContato/>}
        />
        <Route
          path="/clientes/:idCliente/contatos/:idContato/excluir"
          element={<ExcluirContato/>}
        />
        <Route
          path="/clientes/:idCliente/contatos/novo"
          element={<AdicionarContato/>}
        />

      </Routes>
 
  );
};

export default App;