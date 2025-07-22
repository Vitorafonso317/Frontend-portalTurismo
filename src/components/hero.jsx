// Importa React
import React from "react";

// Importa o componente Link para navegação entre rotas
// ⚠️ ATENÇÃO: o correto é importar de 'react-router-dom' (não 'react-router')
import { Link } from "react-router-dom"; // ✅ Correção

/**
 * Componente Hero
 * ----------------------------
 * Exibe um banner de tela cheia com imagem de fundo, título, parágrafo
 * e botão "Saiba Mais" que redireciona para uma rota (ex: /sobre).
 * 
 * Props esperadas:
 * - imagem: string (URL da imagem de fundo)
 * - titulo: string (título principal)
 * - paragrafo: string (texto abaixo do título)
 */
const Hero = (props) => {
  return (
    <>
      <div
        // Container principal do Hero
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${props.imagem})` }} // Imagem de fundo
      >
        {/* Conteúdo centralizado e sobreposto à imagem */}
        <div className="relative z-10 text-center p-4 text-white bg-opacity-30 rounded-lg">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.titulo}
          </h1>

          {/* Parágrafo abaixo do título */}
          <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.paragrafo}
          </p>

          {/* Botão de navegação */}
          <Link
            to="/sobre" // Define a rota para a página "Sobre"
            className="bg-[#354225] hover:bg-[#0d1409] text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para uso em outras partes do projeto
export default Hero;
