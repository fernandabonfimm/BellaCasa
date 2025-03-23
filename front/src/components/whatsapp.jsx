import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "../../styles/components.css";
import CallCenter from "../assets/images/callcenter-2.png";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("whatsapp-section");
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
      id="whatsapp-section"
      className={`whatsapp-container ${isVisible ? "active" : ""}`}
    >
        <div className="whatsapp-card">
          <FaWhatsapp size={40} color="#000000" />
          <h3>Precisa de atendimento?</h3>
          <p>
            Se você prefere um atendimento personalizado para escolher o melhor
            produto para você, entre em contato com a nossa central de
            atendimento.
          </p>
          <span>Para acessar, clique no botão abaixo.</span>
          <button className="whats-button">Atendimento via WhatsApp</button>
        </div>
        <img
          src={CallCenter
            }
            alt="Call Center"
            className={`call-center-image`}
            />
    </section>
  );
};

export default WhatsappSection;
