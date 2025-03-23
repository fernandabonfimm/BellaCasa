import React from "react";
import "../../styles/home.css";
import Chat1 from "../assets/images/chat1.png";
import Chat2 from "../assets/images/chat2.png";
import Video1 from "../assets/images/camavideo.mp4";
import Video2 from "../assets/images/torneira.mp4";

export default function Avaliacoes() {
  return (
    <div className="items_container">
      <h3>⭐ Avaliações de nossos clientes ⭐</h3>
      <span style={{marginBottom: '10px', fontSize: '17px', fontWeight:'600'}}>Descubra as experiências e opiniões de quem já confiou em nosso serviço!</span>
      <div className="container_avaliacao">
        <img src={Chat1} alt="chat1" className="media_item" />
        <video src={Video1} controls className="media_item" />
        <img src={Chat2} alt="chat2" className="media_item" />
        <video src={Video2} controls className="media_item" />
      </div>
    </div>
  );
}
