import React, { useState } from "react";
import axios from "axios";

const AdicionarCliente = () => {
  const [cliente, setCliente] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/clientes/", cliente)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  };

  return (
    <div>
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
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarCliente;
