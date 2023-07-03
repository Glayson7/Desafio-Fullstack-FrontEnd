import React, { useEffect, useState } from "react";
import api from "./api";
import ItemCliente from "./ItemCliente";
import { useNavigate } from "react-router-dom";
import "./Clientes.css";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await api.get("/client");
        setClientes(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Erro ao buscar clientes:", error);
        setError("Ocorreu um erro ao buscar os clientes.");
        setIsLoading(false);
      }
    };

    fetchClientes();
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/client/${id}`);

      const response = await api.get("/client");
      setClientes(response.data);
    } catch (error) {
      console.error("Algo deu errado!", error);
    }
  };

  const handleAddCliente = () => {
    navigate("/adicionar");
  };

  if (isLoading) {
    return <div>Carregando clientes...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro ao buscar os clientes: {error}</div>;
  }

  return (
    <div className="clientes">
      <h1 className="clientes__titulo">Clientes</h1>
      <button className="clientes__botao-adicionar" onClick={handleAddCliente}>
        Cadastrar novo cliente
      </button>
      <div className="clientes__lista">
        {clientes.map((cliente) => (
          <ItemCliente
            key={cliente.id}
            cliente={cliente}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Clientes;
