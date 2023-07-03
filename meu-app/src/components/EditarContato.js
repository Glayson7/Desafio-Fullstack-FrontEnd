import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditarContato = () => {
  const { idCliente, idContato } = useParams();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/client/${idCliente}/contact/${idContato}`)
      .then((response) => {
        setname(response.data.name);
        setEmail(response.data.email);
        setTelefone(response.data.phone);
      })
      .catch((error) => {
        console.error("Erro na requisição!", error);
      });
  }, [idCliente, idContato]);

  const editarContato = () => {
    axios
      .put(`http://localhost:8000/client/${idCliente}/contact/${idContato}/`, {
        nome_completo: name,
        email: email,
        telefone: telefone,
        cliente: idCliente,
      })
      .then(() => {
        navigate(`/clientes/${idCliente}/contatos`);
      });
  };

  return (
    <div>
      <h1>Editar Contato</h1>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <button onClick={editarContato}>Salvar</button>
    </div>
  );
};

export default EditarContato;
