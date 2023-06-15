import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdicionarCliente.css";

const AdicionarCliente = () => {
  const [cliente, setCliente] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obtenha o token de acesso do local storage ou de qualquer outra forma que você esteja usando
    const accessToken = localStorage.getItem("access_token");

    axios
      .post("http://localhost:8000/clientes/", cliente, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  };

  return (
    <div className="container">
      <h1>Adicionar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input
            type="text"
            name="nome_completo"
            value={cliente.nome_completo}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
          />
        </label>
        <button className="save-button" type="submit">Adicionar</button>
      </form>
      <button className="back-button" onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default AdicionarCliente;
