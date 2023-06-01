import React, { useState } from 'react';
import axios from 'axios';

const AdicionarContato = ({ idCliente }) => {
  const [contato, setContato] = useState({
    nome_completo: '',
    email: '',
    telefone: ''
  });

  const handleChange = e => {
    setContato({ ...contato, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`http://localhost:8000/clientes/${idCliente}/contatos/`, contato)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Algo deu errado!', error);
      });
  };

  return (
    <div>
      <h1>Adicionar Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input type="text" name="nome_completo" value={contato.nome_completo} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={contato.email} onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="tel" name="telefone" value={contato.telefone} onChange={handleChange} />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AdicionarContato;
