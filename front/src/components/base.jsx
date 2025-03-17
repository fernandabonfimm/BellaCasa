import React from "react";
import "../../styles/base.css";
import { Layout, Button, Drawer } from "antd";
const { Header, Content, Footer } = Layout;
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../assets/images/logoHBC2.png";
import { Divider } from "antd";

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
  const [open, setOpen] = React.useState(false);
  return (
    <div className="base">
      <Header className="navbar_action">
        <span className="NV_title">
          Móveis únicos com até <strong>20% OFF</strong> em todo o site da loja!
        </span>
      </Header>
      <Header className="header-logo">
        <Button
          className="menu-button"
          icon={<MenuOutlined style={{display: 'flex'}} />}
          onClick={() => setOpen(true)}
        />
        <img src={Logo} alt="Logo" />
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
          <button>Parceiros</button>
          <button>Política de Privacidade</button>
          <button>Termos de Uso</button>
          <button>Contato</button>
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
