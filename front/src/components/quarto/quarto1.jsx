import React from "react";
import "../../../styles/home.css";
import CardItem from "../../components/cardItem";
import Cama from "../../assets/images/items/cama.png";
import Cama1 from "../../assets/images/items/cama2.png";
import Abajur from "../../assets/images/items/1.png";
import Abajur2 from "../../assets/images/items/2.png";
import Mesa from "../../assets/images/items/3.png";
import Mesa2 from "../../assets/images/items/4.png";
import Quadro from "../../assets/images/items/5.png";
import Quadro2 from "../../assets/images/items/6.png";

import { Carousel, Button } from "antd";

export default function Quarto1() {
  const items = [
    {
      src: Cama1,
      src2: Cama,
      title: "Kit Cobre Leito Turin 14 peças com 180 Fios - Premium",
      originalPrice: "De: R$ 629,90",
      price: "Por: R$247,90",
      vendidos: "1,1mil Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto ou até 12x no cartão",
    },
    {
      src: Abajur,
      src2: Abajur2,
      title: "Luminária Abajur de Mesa LED Estilo Diamante",
      originalPrice: "De: R$ 79,97",
      price: "Por: R$ 38,97",
      vendidos: "320 Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto ou até 7x no cartão",
    },
    {
      src: Mesa,
      src2: Mesa2,
      title: "Kit 2 Mesa De Cabeceira Retrô de Madeira com Puxador Couro",
      originalPrice: "De: R$ 274,00",
      price: "Por: R$ 249,90",
      vendidos: "553 Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto ou até 12x no cartão",
    },
    {
      src: Quadro,
      src2: Quadro2,
      title: "Quadro Decorativo 110x80cm Árvore da Vida Dourada",
      originalPrice: "De: R$ 109,90",
      price: "Por: R$ 35,00",
      vendidos: "237 Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto ou até 7x no cartão",
    },
    // Adicione mais itens aqui
  ];
  return (
    <div className="items_container">
      <h3>Quarto com até 20% OFF</h3>
      <div className="carousel-container_mobile">
        <Carousel
          autoplay
          dots={{ className: "custom-dots" }}
          slidesToShow={5} // Exibe 5 no desktop
          responsive={[
            {
              breakpoint: 768, // Mobile
              settings: {
                slidesToShow: 1, // Mostra 1 item apenas
              },
            },
          ]}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <CardItem {...item} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="desktopitens">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <CardItem {...item} />
          </div>
        ))}
      </div>
      <div>
        <Button type="primary" className="see-all-button">
          Ver tudo de Quarto
        </Button>
      </div>
    </div>
  );
}
