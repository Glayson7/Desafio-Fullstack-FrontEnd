import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/clientes/${id}/`)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/clientes/${id}/`, cliente)
      .then((response) => {
        console.log(response);
        // Você pode querer fazer algo aqui, como redirecionar para a lista de clientes
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  };

  return (
    <div>
      <h1>Editar Cliente</h1>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarCliente;
