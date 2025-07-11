import React, { useState } from "react";
import BackgroundImage from "../assets/imagens/bg3.jpg";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PiBird } from "react-icons/pi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Mensagem enviada ${formData.name} , ${formData.email}`);
    console.log(`Mensagem: ${formData.message}`);

    alert("Mensagem enviada com sucesso");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        {/* Imagem de fundo com blur */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        ></div>

        {/* Conteúdo do formulário acima do fundo desfocado */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Entre em contato
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1 flex items-center gap-2">
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

            <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1 flex items-center gap-2">
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

            <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1 flex items-center gap-2">
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

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#354225] hover:bg-[#1b2313] text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full"
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

export default ContactForm;
