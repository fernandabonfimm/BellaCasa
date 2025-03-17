import React from "react";
import { Card, Divider } from "antd";
import "../../styles/components.css";

export default function CardHome({ icon, title, subtitle }) {
  return (
    <Card className="card-home">
      <div className="div-card-home">
        <div className="card-home_icon">{icon}</div>
        <div className="card-home_text">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </div>
    </Card>
  );
}
