import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdicionarCliente.css";

const AdicionarCliente = () => {
  const [cliente, setCliente] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/client", cliente, {})
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
            name="name"
            value={cliente.name}
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
          phone:
          <input
            type="tel"
            name="phone"
            value={cliente.phone}
            onChange={handleChange}
          />
        </label>
        <button className="save-button" type="submit">
          Adicionar
        </button>
      </form>
      <button className="back-button" onClick={() => navigate(-1)}>
        Voltar
      </button>
    </div>
  );
};

export default AdicionarCliente;
