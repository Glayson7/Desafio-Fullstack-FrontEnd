import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/clientes/')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Algo deu errado!', error);
      });
  }, []);

  const handleDelete = id => {
    axios.delete(`http://localhost:8000/clientes/${id}/`)
      .then(response => {
        // Após a exclusão bem-sucedida, recarregue os clientes para atualizar a lista
        axios.get('http://localhost:8000/clientes/')
          .then(response => {
            setClientes(response.data);
          })
          .catch(error => {
            console.error('Algo deu errado!', error);
          });
      })
      .catch(error => {
        console.error('Algo deu errado!', error);
      });
  };

  return (
    <div>
      <h1>Clientes</h1>
      {clientes.map(cliente => (
        <div key={cliente.id}>
          <h2>{cliente.nome_completo}</h2>
          <p>{cliente.email}</p>
          <p>{cliente.telefone}</p>
          <button onClick={() => handleDelete(cliente.id)}>Excluir</button>
          <Link to={`/editar/${cliente.id}`}>Editar</Link>
        </div>
      ))}
    </div>
  );
}

export default Clientes;
