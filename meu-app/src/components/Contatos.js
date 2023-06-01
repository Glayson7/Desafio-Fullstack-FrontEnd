import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contatos = ({ idCliente }) => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/clientes/${idCliente}/contatos/`)
      .then(response => {
        setContatos(response.data);
      })
      .catch(error => {
        console.error('Algo deu errado!', error);
      });
  }, [idCliente]);

  return (
    <div>
      <h1>Contatos</h1>
      {contatos.map(contato => (
        <div key={contato.id}>
          <h2>{contato.nome_completo}</h2>
          <p>{contato.email}</p>
          <p>{contato.telefone}</p>
        </div>
      ))}
    </div>
  );
}

export default Contatos;
