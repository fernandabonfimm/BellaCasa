import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { FaMedal } from "react-icons/fa";
import "../../styles/components.css";
import Poltrona from "../assets/images/poltrona.png";
import Abajur from "../assets/images/abajur.png";
import Medalha from "../assets/images/7dias.png";
const GuaranteeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("guarantee-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="guarantee-section"
      className={`guarantee-container ${isVisible ? "active" : ""}`}
    >
      <div className="content">
        <img
          src={Poltrona}
          alt="POltrona"
          className={`product-image utensilio ${isVisible ? "show" : ""}`}
        />
        <Card className="guarantee-card">
          <div className="medal-container">
            <img src={Medalha} alt="medalha" />
          </div>
          <h2>Garantia de 7 Dias!</h2>
          <p>
            Experimente sem medo! Se não gostar, devolvemos seu dinheiro sem
            burocracia.
          </p>
        </Card>

        <img
          src={Abajur}
          alt="Abajur"
          className={`product-image poltrona ${isVisible ? "show" : ""}`}
        />
      </div>
    </section>
  );
};

export default GuaranteeSection;
