import React from "react";
// Importa componentes de Navbar, Footer e Carousel
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// Importa imagem de fundo
import Backgroundimage from "../assets/imagens/bg2.png";
// Importa componente de carrossel
import Carousel from "../components/carousel";

const Servicepage = () => {
  return (
    <>
      {/* Container principal com fundo configurado e altura mínima da tela */}
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Backgroundimage})` }}
      >
        {/* Barra de navegação no topo */}
        <Navbar />

        {/* Conteúdo principal centralizado */}
        <main className="flex flex-col items-center justify-center text-center mt-25 px-4">
          {/* Título principal da página */}
          <h1 className="text-3xl font-extrabold font-bold text-white mb-4">
            Nossos serviços
          </h1>
          {/* Texto descritivo abaixo do título */}
          <p className="text-lg font-semibold text-white max-w-xl">
            Descubra a variedade de serviços que oferecemos para ajudar você a alcançar seus objetivos
          </p>
        </main>

        {/* Espaço flexível que cresce para empurrar o carrossel e o footer para o fim da página */}
        <div className="flex-grow"></div>

        {/* Container para o carrossel ocupando toda a largura */}
        <div className="w-full">
          <Carousel />
        </div>

        {/* Rodapé da página */}
        <Footer />
      </div>
    </>
  );
};

export default Servicepage;
