import React from "react";
import "../../styles/home.css";
import Base from "../components/base";
import CardHome from "../components/cardHome";
import { FaTruck, FaHeart, FaShoppingBasket } from "react-icons/fa";
import { MdMoneyOffCsred, MdLocalOffer } from "react-icons/md";
import BannerCarousel from "../components/banners";
import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.png";

const banners = [Banner1, Banner2];

export default function Home() {
  const sliderRef = React.useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    sliderRef.current.startX = touch.clientX;
    sliderRef.current.scrollLeftStart = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current.startX) return;
    const touch = e.touches[0];
    const moveX = touch.clientX - sliderRef.current.startX;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeftStart - moveX;
  };

  const handleTouchEnd = () => {
    sliderRef.current.startX = null;
  };
  return (
    <Base>
      <div
        className="cards-div"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CardHome
          icon={
            <MdMoneyOffCsred style={{ color: "#b0131e", fontSize: "24px" }} />
          }
          title="Frete Grátis"
          subtitle="em produtos selecionados"
        />
        <CardHome
          icon={<FaTruck style={{ color: "#b0131e", fontSize: "24px" }} />}
          title="Itens com"
          subtitle="Envio imediato"
        />
        <CardHome
          icon={<MdLocalOffer style={{ color: "#b0131e", fontSize: "24px" }} />}
          title="Ofertas todos"
          subtitle="os dias"
        />
        <CardHome
          icon={<FaHeart style={{ color: "#b0131e", fontSize: "24px" }} />}
          title="Ame seu lar"
          subtitle="com nossas ofertas"
        />
      </div>
      <div className="div-banners">
        <BannerCarousel images={banners} />
      </div>
    </Base>
  );
}
