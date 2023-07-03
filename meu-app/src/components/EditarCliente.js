import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarCliente.css";

const EditarCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/client/${id}`)
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
      .put(`http://localhost:8000/client/${id}`, cliente)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Algo deu errado!", error);
      });
  };

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h1>Editar Cliente</h1>
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
          Telefone:
          <input
            type="tel"
            name="phone"
            value={cliente.phone}
            onChange={handleChange}
          />
        </label>
        <button className="save-button" type="submit">
          Salvar
        </button>
      </form>
      <button className="back-button" onClick={handleVoltar}>
        Voltar
      </button>
    </div>
  );
};

export default EditarCliente;
