import React from "react";
import { Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "../../styles/home.css";
import Logo from "../assets/images/logoHBC2.png";

const PlanCard = ({ title, features, price }) => {
  return (
    <Card
      className={`plan-card ${
        title == "Vitrine Diamond" ? "borda_p2" : "borda_p1"
      }`}
    >
      <span
        className={`plan-title ${
          title == "Vitrine Diamond" ? "color_p2" : "color_p1"
        }`}
      >
        {title}
      </span>
      <div className="div_garantia">
        <span>7 dias de GARANTIA</span>
      </div>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>
            <CheckCircleOutlined className="check-icon" /> {feature}
          </li>
        ))}
      </ul>
      <p className="plan-price">R$ {price}</p>
      <button className="plan-button">Adquira Agora!</button>
    </Card>
  );
};

export default PlanCard;
