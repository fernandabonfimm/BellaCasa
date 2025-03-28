import React from "react";
import "../../styles/base.css";
import { Layout, Button, Drawer } from "antd";
const { Header, Content, Footer } = Layout;
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../assets/images/logoHBC2.png";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

const menuItems = [
  "Cozinha",
  "Quarto",
  "Banheiro",
  "Sala de Estar",
  "Lavanderia",
  "Churrasqueira",
  "Jardim",
];

const Base = ({ children }) => {
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="base">
      <Header className="navbar_action">
        <div className="marquee">
          <div className="marquee-content">
            <span>
              Móveis únicos com até <strong>80% OFF</strong> em todo o site da
              loja!
            </span>
            <span className="dot">•</span>
            <span>Frete grátis para compras acima de R$ 299!</span>
            <span className="dot">•</span>
            <span>Ame seu lar, pagando barato!</span>
            <span className="dot">•</span>
            <span>Preços exclusivos somente aqui!</span>
            <span className="dot">•</span>
            <span>7 dias de garantia em todos os produtos</span>
            <span className="dot">•</span>
            <span>Loja segura e com boas avaliações</span>
          </div>
        </div>
      </Header>
      <Header className="header-logo">
        <Button
          className="menu-button"
          icon={<MenuOutlined style={{ display: "flex" }} />}
          onClick={() => setOpen(true)}
        />
        <img
          src={Logo}
          alt="Logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigation("/")}
        />
      </Header>

      <Drawer
        title="Categorias"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        {menuItems.map((item) => (
          <div key={item} className="drawer-item">
            <button onClick={() => setOpen(false)}>{item}</button>
          </div>
        ))}
      </Drawer>

      <Header className="header_itens">
        <button>Cozinha</button>
        <Divider type="vertical" style={{ background: "#d0d3cf" }} />
        <button>Quarto</button>
        <Divider type="vertical" style={{ background: "#d0d3cf" }} />
        <button>Banheiro</button>
        <Divider type="vertical" style={{ background: "#d0d3cf" }} />
        <button>Sala de Estar</button>
        <Divider type="vertical" style={{ background: "#d0d3cf" }} />
        <button>Lavanderia</button>
        <Divider type="vertical" style={{ background: "#d0d3cf" }} />
        <button>Churrasqueira</button>
        <Divider type="vertical" style={{ background: "#d0d3cf" }} />
        <button>Jardim</button>
      </Header>
      <Content className="container-allPages">{children}</Content>
      <Footer className="footer">
        <Divider style={{ background: "#e4e8e2" }} />
        <div className="itens-footer">
          <button onClick={() => navigation("/privacy")}>
            Política de Privacidade
          </button>
          {/* <Divider type="vertical" style={{ background: "#e4e8e2", height: "30px", }} /> */}
          <button onClick={() => navigation("/contact")}>Contato</button>
        </div>
        <Divider style={{ background: "#e4e8e2" }} />
        <div className="details-footer">
          <span>Bella Casa | Ame o seu Lar</span>
          <span>Afiliada de grandes lojas parceiras para venda de móveis</span>
        </div>
      </Footer>
      <Footer className="footer-2">
        <span>
          © 2025 https://www.bellacasa.com.br. Todos os direitos reservados.
        </span>
      </Footer>
    </div>
  );
};

export default Base;
