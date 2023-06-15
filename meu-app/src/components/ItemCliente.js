import { useNavigate } from "react-router-dom";
import "./ItemCliente.css";

const ItemCliente = ({ cliente, handleDelete }) => {
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate(`/clientes/${cliente.id}/contatos/novo`);
  };

  return (
    <div className="item-cliente">
      <h2>{cliente.nome_completo}</h2>
      <p>{cliente.email}</p>
      <p>{cliente.telefone}</p>
      <div className="item-cliente__botoes">
        <button className="excluir" onClick={() => handleDelete(cliente.id)}>Excluir</button>
        <button className="editar" onClick={() => navigate(`/editar/${cliente.id}`)}>Editar</button>
        <button className="ver" onClick={() => navigate(`/clientes/${cliente.id}/contatos`)}>Ver contatos</button>
        <button className="adicionar" onClick={handleAddContact}>Adicionar Contato</button>
      </div>
    </div>
  );  
};

export default ItemCliente;
