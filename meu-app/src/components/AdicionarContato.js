import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./AdicionarContato.css";

const AdicionarContato = () => {
  const { idCliente } = useParams();
  const navigate = useNavigate();

  const [contato, setContato] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContato({ ...contato, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/client/${idCliente}/contact`, contato)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  };

  const handleVoltar = () => {
    navigate(-1); // Redireciona para a página anterior
  };

  return (
    <div className="container">
      <h1>Adicionar Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input
            type="text"
            name="name"
            value={contato.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contato.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="phone"
            value={contato.phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default AdicionarContato;
