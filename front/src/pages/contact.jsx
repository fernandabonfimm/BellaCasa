import React from "react";
import "../../styles/home.css";
import Base from "../components/base";
import emailjs from "emailjs-com";
import { Form, Input, Button, message } from "antd";
import PlanCard from "../components/cardPlan";

const plans = [
  {
    title: "Minha 1° Vitrine",
    features: [
      "Implantação do branding da sua marca",
      "Implantação dos produtos mensalmente",
      "Implantação dos links de venda",
      "Suporte diário",
      "Vitrine no AR em poucos dias",
    ],
    price: "229,90/mensal",
  },
  {
    title: "Vitrine Diamond",
    features: [
      "Atualização diária dos produtos",
      "I.A para atendimento no WhatsAPP",
      "Personalização do site como desejar",
      "Tudo da 1° Vitrine",
      "Suporte 24H",
    ],
    price: "890,00/mensal",
  },
];

export default function Contact() {
  const onFinish = (values) => {
    const { name, email, subject, message: userMessage } = values;

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: userMessage,
    };

    emailjs
      .send(
        "service_3nn5bub", // Substitua pelo seu Service ID
        "template_n7vh565", // Substitua pelo seu Template ID
        templateParams,
        "mNLUpft2zvur90pWC" // Substitua pelo seu Public Key
      )

      .then(
        (response) => {
          message.success("E-mail enviado com sucesso!");
        },
        (error) => {
          message.error("Erro ao enviar o e-mail. Tente novamente.");
        }
      );
  };

  return (
    <Base>
      <div className="base_cc">
        <div className="base_tt_cc bg_grenn">
          <h2>
            EI, Empreendedor! Precisa de uma vitrine ou pré-sell para os seus
            produtos?
          </h2>
          <h3>
            Assim como esse site lindo e funcional que está vendo? Fale comigo!
          </h3>
        </div>
        <div className="base_tt_cc">
          <div className="plans-container">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <span>Ou se prefirir entre em contato pelo nosso e-mail.</span>
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
          >
            <Input className="border-gray-300 rounded-xl p-2" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                type: "email",
                message: "Insira um e-mail válido!",
              },
            ]}
          >
            <Input className="border-gray-300 rounded-xl p-2" />
          </Form.Item>

          <Form.Item
            name="subject"
            label="Assunto"
            rules={[{ required: true, message: "Digite o assunto!" }]}
          >
            <Input className="border-gray-300 rounded-xl p-2" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Mensagem"
            rules={[{ required: true, message: "Digite sua mensagem!" }]}
          >
            <Input.TextArea
              rows={4}
              className="border-gray-300 rounded-xl p-2"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-xl"
            >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Base>
  );
}
