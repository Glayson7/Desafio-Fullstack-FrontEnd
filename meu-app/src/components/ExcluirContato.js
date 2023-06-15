import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExcluirContato = () => {
  const { idCliente, idContato } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:8000/clientes/${idCliente}/contatos/${idContato}/`)
      .then(() => {
        navigate(`/clientes/${idCliente}/contatos`);
      })
      .catch(error => {
        console.error('Erro na requisição!', error);
      });
  }, [idCliente, idContato, navigate]);

  return (
    <div>
      <h1>Contato excluído</h1>
    </div>
  );
}

export default ExcluirContato;
