import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarCliente.css";


const EditarCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        <button className="save-button" type="submit">Salvar</button>
      </form>
      <button className="back-button" onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default EditarCliente;
