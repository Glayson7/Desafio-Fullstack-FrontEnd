import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditarContato = () => {
  const { idCliente, idContato } = useParams();
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cliente, setCliente] = useState(""); // Novo estado para cliente

  useEffect(() => {
    axios
      .get(`http://localhost:8000/clientes/${idCliente}/contatos/${idContato}/`)
      .then((response) => {
        setNomeCompleto(response.data.nome_completo);
        setEmail(response.data.email);
        setTelefone(response.data.telefone);
        setCliente(response.data.cliente); // Atualize o estado do cliente aqui
      })
      .catch((error) => {
        console.error("Erro na requisição!", error);
      });
  }, [idCliente, idContato]);

  const editarContato = () => {
    axios
      .put(
        `http://localhost:8000/clientes/${idCliente}/contatos/${idContato}/`,
        {
          nome_completo: nomeCompleto,
          email: email,
          telefone: telefone,
          cliente: cliente, // Inclua cliente no corpo da requisição
        }
      )
      .then(() => {
        navigate(`/clientes/${idCliente}/contatos`);
      });
  };

  return (
    <div>
      <h1>Editar Contato</h1>
      <input
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <input
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />{" "}
      {/* Novo input para cliente */}
      <button onClick={editarContato}>Salvar</button>
    </div>
  );
};

export default EditarContato;
