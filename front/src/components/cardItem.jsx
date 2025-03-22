import React from "react";
import { Tag, Card, Divider } from "antd";
import "../../styles/components.css";

export default function CardItem({
  src,
  src2,
  title,
  description,
  originalPrice,
  price,
  vendidos,
  cashback,
  frete,
}) {
  const [currentSrc, setCurrentSrc] = React.useState(src);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setTimeout(() => setCurrentSrc(src2), 150);
    } else {
      setTimeout(() => setCurrentSrc(src), 150);
    }
  }, [isHovered]);
  return (
    <Card className="card-item">
   <div
      className="content_img_CI"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={currentSrc} alt="item" className={isHovered ? "fade-in" : "fade-out"} />
    </div>

      <div className="content-desc_CI">
        <h3>{title}</h3>
        <span className="original-text_CI">{originalPrice}</span>
        <span className="price-text_CI">{price}</span>
        <span className="description_CI">{description}</span>
        <div className="content-bads_CI">
          {vendidos && <Tag className="tag red">{vendidos}</Tag>}
          {cashback && <Tag className="tag blue">{cashback}</Tag>}
          {frete && <Tag className="tag green">{frete}</Tag>}
        </div>
      </div>
    </Card>
  );
}
