import React from "react";
import { FaInstagram, FaFacebook, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#354225] via-[#1b2313] to-[#000400] text-white py-2 px-4 shadow-md mt-auto">
      <div className="flex flex-col items-center space-y-2">
        {/* Texto menor e centralizado */}
        <p className="text-sm text-white text-center">
          Nova serra verde. Todos os direitos reservados
        </p>

        {/* Ícones menores e centralizados */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-fuchsia-600">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-green-500">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

