import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Contatos.css";

const Contatos = () => {
  const [contatos, setContatos] = useState([]);
  const [cliente, setCliente] = useState(null);
  const { idCliente } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/client/${idCliente}/contacts`)
      .then((response) => {
        console.log(response.data);
        if (response.data && typeof response.data === "object") {
          setCliente(response.data);
          // Extrair contatos da resposta da API e configurá-los no estado.
          if (Array.isArray(response.data.contacts)) {
            setContatos(response.data.contacts);
          } else {
            console.error("Contatos não são um array", response.data.contacts);
          }
        } else {
          console.error("A resposta da API não é um objeto", response.data);
        }
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  }, [idCliente]);

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="contatos">
      <h1 className="contatos__titulo">
        Contatos de <span>{cliente ? cliente.name : ""}</span>
      </h1>
      {Array.isArray(contatos) &&
        contatos.map((contato) => (
          <div key={contato.id} className="contatos__card">
            <h2 className="contatos__nome">{contato.name}</h2>
            <p className="contatos__email">{contato.email}</p>
            <p className="contatos__telefone">{contato.phone}</p>
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
