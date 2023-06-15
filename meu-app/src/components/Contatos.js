import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Contatos.css";

const Contatos = () => {
  const [contatos, setContatos] = useState([]);
  const [cliente, setCliente] = useState(null); // Adicionado estado para o cliente
  const { idCliente } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/clientes/${idCliente}/contatos/`)
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });

    // Solicitação para obter os detalhes do cliente
    axios
      .get(`http://localhost:8000/clientes/${idCliente}/`)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  }, [idCliente]);

  const handleVoltar = () => {
    navigate(-1); // Redireciona para a página anterior
  };

  return (
    <div className="contatos">
      <h1 className="contatos__titulo">
        Contatos de  <span>{cliente ? cliente.nome_completo : ""}</span>
      </h1>
      {contatos.map((contato) => (
        <div key={contato.id} className="contatos__card">
          <h2 className="contatos__nome">{contato.nome_completo}</h2>
          <p className="contatos__email">{contato.email}</p>
          <p className="contatos__telefone">{contato.telefone}</p>
          <Link
            to={`/clientes/${idCliente}/contatos/${contato.id}/editar/`}
            className="contatos__link"
          >
            Editar
          </Link>{" "}
          <Link
            to={`/clientes/${idCliente}/contatos/${contato.id}/excluir/`}
            className="contatos__link"
          >
            Excluir
          </Link>
        </div>
      ))}
      <button className="contatos__botao-voltar" onClick={handleVoltar}>
        Voltar
      </button>
    </div>
  );
};

export default Contatos;
