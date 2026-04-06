import "./App.css";
import { Link } from "react-router-dom";

import logo from "./assets/logo.jpeg";
import oficina from "./assets/oficina.jpeg";
import servico1 from "./assets/servico1.jpeg";
import servico2 from "./assets/servico2.jpeg";
import servico3 from "./assets/servico3.jpeg";

export default function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo Autochapeação Walter" />
          <h1>Walter <span>Funilaria</span></h1>
        </div>

        <div>
          <a
            href="https://wa.me/5555999371235"
            className="btn"
            target="_blank"
          >
            📞 WhatsApp
          </a>

          <a
            href="https://www.instagram.com/autochapecaowalter/"
            className="btn insta"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </header>

      {/* BANNER */}
      <section className="banner">
        <img src={servico3} alt="Serviço realizado" />

        <div className="banner-text">
          <h2>Autochapeação Walter</h2>
          <p>Qualidade e confiança para seu veículo</p>

          
        </div>
      </section>

      {/* HERO */}
      <section className="hero">
        <p>Funilaria, pintura e martelinho de ouro em Caçapava do Sul</p>

        <Link to="/orcamento" className="btn">
          📄 Pedir orçamento
        </Link>
      </section>

      {/* SERVIÇOS */}
      <section className="services">
        <div className="card">
          <h3>Funilaria</h3>
          <p>Correção de amassados e alinhamento.</p>
        </div>

        <div className="card">
          <h3>Pintura</h3>
          <p>Pintura automotiva profissional.</p>
        </div>

        <div className="card">
          <h3>Martelinho de ouro</h3>
          <p>Remoção de amassados sem pintar.</p>
        </div>
      </section>

      {/* GALERIA */}
      <section className="gallery">
        <h2>Serviços realizados</h2>

        <div className="gallery-grid">
          <img src={oficina} alt="Oficina" />
          <img src={servico1} alt="Serviço 1" />
          <img src={servico2} alt="Serviço 2" />
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact">
        <h2>Contato</h2>

        <p>
          📍{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Baltazar+de+Bem+24+Caçapava+do+Sul"
            target="_blank"
          >
            Rua Baltazar de Bem, 24 - Caçapava do Sul - RS
          </a>
          <br />
          📞 (55) 99937-1235
          <br />
          📸{" "}
          <a
            href="https://www.instagram.com/autochapecaowalter/"
            target="_blank"
          >
            @autochapecaowalter
          </a>
        </p>

        <a
          href="https://wa.me/5555999371235"
          className="btn"
          target="_blank"
        >
          📞 Chamar no WhatsApp
        </a>
      </section>

      {/* MAPA */}
      <section className="map">
        <h2>Onde estamos</h2>

        <iframe
          src="https://maps.google.com/maps?q=Rua%20Baltazar%20de%20Bem%2024%20Cacapava%20do%20Sul&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Autochapeação Walter <br />
        Desenvolvido por M&M Strategic Group
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5555999371235"
        className="whatsapp-float"
        target="_blank"
      >
        📞
      </a>

    </div>
  );
}