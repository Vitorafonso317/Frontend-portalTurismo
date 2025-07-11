import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bg.png";
import pontoT1 from "../assets/imagens/pontoT1.jpg"
import pontoT2 from "../assets/imagens/pontoT4.jpg"

const SaibaMais = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navbar no topo */}
      <Navbar />

      {/* Conteúdo que cresce para ocupar o espaço restante */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-black/40 p-8 rounded-xl text-white text-center w-full max-w-3xl min-h-[600px] flex flex-col items-center justify-center">
          <p className="text-xl mb-8">Desfrute das melhores ofertas</p>

          {/* Cards lado a lado */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-[#28331c] text-white rounded-lg p-4 w-40 shadow-lg">
              <h2 className="text-lg font-semibold mb-2">Oferta 1</h2>
              <img src={pontoT1} alt="" />
              <p className="text-sm">Esta com 30% de desconto para pagamento a vista</p>
            </div>

            <div className="bg-[#28331c] text-white rounded-lg p-4 w-40 shadow-lg">
              <h2 className="text-lg font-semibold mb-2">Oferta 2</h2>
              <img src={pontoT2} alt="" />
              <p className="text-sm">Esta com 15% de desconto para pagamento a vista</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer fixado no final da tela */}
      <Footer />
    </div>
  );
};

export default SaibaMais;

