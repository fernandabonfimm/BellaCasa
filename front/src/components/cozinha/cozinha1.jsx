import React from "react";
import "../../../styles/home.css";
import CardItem from "../../components/cardItem";
import Pote from "../../assets/images/items/potesd.png";
import Pote2 from "../../assets/images/items/potes2.png";
import Garfo from "../../assets/images/items/garfo1.png";
import Garfo2 from "../../assets/images/items/garfo2.png";

import { Carousel, Button } from "antd";

export default function Cozinha1() {

  const items = [
    {
      src: Pote,
      src2: Pote2,
      title: "Kit 3 Potes Herméticos de Vidro com Tampa e Colher de Bambu",
      originalPrice: "De: R$ 249,00",
      price: "Por: R$32,90",
      vendidos: "146 Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto de 5% ou até 10x no cartão",
    },
    {
      src: Garfo,
      src2: Garfo2,
      title: "Kit 24 peças de Talheres de Luxo Linha Ouro",
      originalPrice: "De: R$ 149,90",
      price: "Por: R$26,90",
      vendidos: "3,6mil Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto de 5% ou até 5x no cartão",
    },
    {
      src: Garfo,
      src2: Garfo2,
      title: "Kit 24 peças de Talheres de Luxo Linha Ouro",
      originalPrice: "De: R$ 149,90",
      price: "Por: R$26,90",
      vendidos: "3,6mil Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto de 5% ou até 5x no cartão",
    },
    {
      src: Garfo,
      src2: Garfo2,
      title: "Kit 24 peças de Talheres de Luxo Linha Ouro",
      originalPrice: "De: R$ 149,90",
      price: "Por: R$26,90",
      vendidos: "3,6mil Vendido(s)",
      frete: "Frete grátis",
      description: "Á vista no pix com desconto de 5% ou até 5x no cartão",
    },
    // Adicione mais itens aqui
  ];
  return (
      <div className="items_container">
        <h3>Cozinha com frete grátis</h3>
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
            Ver tudo de Cozinha
          </Button>
        </div>
      </div>
  );
}
