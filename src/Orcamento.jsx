import { useState } from "react";
import "./App.css";
import servico3 from "./assets/servico3.jpeg";

export default function Orcamento() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [descricao, setDescricao] = useState("");

  const enviarWhatsApp = () => {
    if (!nome || !servico || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }

    const mensagem = `Olá! Gostaria de um orçamento.%0A
Nome: ${nome}%0A
Serviço: ${servico}%0A
Descrição: ${descricao}`;

    const url = `https://wa.me/5555999371235?text=${mensagem}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="orcamento-container"
      style={{
        backgroundImage: `url(${servico3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="orcamento-box">
        <h1>Solicitar Orçamento</h1>
        <p>Preencha os dados abaixo e envie direto no WhatsApp</p>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <select
          value={servico}
          onChange={(e) => setServico(e.target.value)}
        >
          <option value="">Selecione o serviço</option>
          <option>Funilaria</option>
          <option>Pintura</option>
          <option>Martelinho de ouro</option>
        </select>

        <textarea
          placeholder="Descreva o problema do veículo"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button onClick={enviarWhatsApp}>
          📞 Enviar para WhatsApp
        </button>
      </div>
    </div>
  );
}