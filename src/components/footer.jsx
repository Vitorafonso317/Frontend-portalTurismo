// Importa React
import React from "react";

// Importa ícones das redes sociais
import { FaInstagram, FaFacebook, FaWhatsappSquare } from "react-icons/fa";

// Componente funcional Footer
const Footer = () => {
  return (
    // Elemento <footer> com estilo de fundo gradiente e texto branco
    <footer className="w-full bg-gradient-to-b from-[#354225] via-[#1b2313] to-[#000400] text-white py-2 px-4 shadow-md mt-auto">
      
      {/* Container flex vertical e centralizado */}
      <div className="flex flex-col items-center space-y-2">
        
        {/* Texto do rodapé */}
        <p className="text-sm text-white text-center">
          Nova serra verde. Todos os direitos reservados
        </p>

        {/* Ícones de redes sociais com espaçamento horizontal */}
        <div className="flex space-x-6 text-xl">
          {/* Ícone do Facebook */}
          <a href="#" className="hover:text-blue-800">
            <FaFacebook />
          </a>

          {/* Ícone do Instagram */}
          <a href="#" className="hover:text-fuchsia-600">
            <FaInstagram />
          </a>

          {/* Ícone do WhatsApp */}
          <a href="#" className="hover:text-green-500">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Exporta o componente para uso em outras partes do projeto
export default Footer;

