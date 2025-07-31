// Importa a biblioteca React e o hook useState para manipular o estado do formulário
import React, { useState } from "react";

// Importa imagem de fundo
import BackgroundImage from "../assets/imagens/bg3.jpg";

// Importa axios para fazer requisições HTTP
import axios from "axios";

// Importa ícones usados no formulário
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PiBird } from "react-icons/pi";

// Componente funcional ContactForm
const ContactForm = () => {
  // Estado inicial do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Função que atualiza os valores do formulário conforme o usuário digita
  const handleChange = (e) => {
    setFormData({
      ...formData,                // mantém os outros campos intactos
      [e.target.name]: e.target.value, // atualiza o campo atual
    });
  };

  // Função para enviar os dados do formulário para o servidor
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita o recarregamento da página

    try {
      // Envia os dados para a API local
      const response = await axios.post("https://backend-portalturismo-ufkp.onrender.com/api/contacts", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Alerta de sucesso
      alert("menssagem cadastrada com sucesso!!" + ` nome: ${formData.name} email: ${formData.email}`);
      window.location.href = "/"; // redireciona para a home
    } catch (error) {
      // Trata erros com resposta do servidor
      if (error.response) {
        alert("Erro ao cadastrar usuário");
      } else {
        // Erros de conexão
        alert("erro ao conectar ao servidor");
      }
    }
  };

  // JSX retornado pelo componente
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        {/* Imagem de fundo com desfoque */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        ></div>

        {/* Conteúdo principal sobre a imagem de fundo */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Entre em contato
          </h2>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Campo nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1 flex items-center gap-2"
              >
                <MdOutlineDriveFileRenameOutline />
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base"
                placeholder="Digite seu nome"
              />
            </div>

            {/* Campo e-mail */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1 flex items-center gap-2"
              >
                <MdEmail />
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base"
                placeholder="Digite seu e-mail"
              />
            </div>

            {/* Campo mensagem */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1 flex items-center gap-2"
              >
                <PiBird />
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base"
                placeholder="Digite sua mensagem"
                rows={4}
              />
            </div>

            {/* Botão de envio */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#354225] hover:bg-[#1b2313] text-white px-6 py-2 rounded-lg transition duration-300 w-full"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default ContactForm;
