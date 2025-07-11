import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Backgroundimage from "../assets/imagens/bg2.png";
import Carousel from "../components/carousel";

const Servicepage = () => {
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Backgroundimage})` }}
      >
        <Navbar />

        {/* Conteúdo centralizado no topo */}
        <main className="flex flex-col items-center justify-center text-center mt-25 px-4">
          <h1 className="text-3xl font-extrabold font-bold text-white mb-4">
            Nossos serviços
          </h1>
          <p className="text-lg font-semibold text-white max-w-xl">
            Descubra a variedade de serviços que oferecemos para ajudar você a alcançar seus objetivos
          </p>
        </main>

        {/* Espaço flexível para empurrar o conteúdo abaixo */}
        <div className="flex-grow"></div>

        {/* Carrossel na parte inferior */}
        <div className="w-full">
          <Carousel />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Servicepage;
