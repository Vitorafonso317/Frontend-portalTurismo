import React from "react";
// Importa componentes de navegação e rodapé
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// Importa imagens de fundo e pontos turísticos (ofertas)
import bg from "../assets/imagens/bg.png";
import pontoT1 from "../assets/imagens/pontoT1.jpg";
import pontoT2 from "../assets/imagens/pontoT4.jpg";

const SaibaMais = () => {
  return (
    // Container principal com altura mínima da tela e fundo configurado com imagem de background
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navbar fixada no topo da página */}
      <Navbar />

      {/* Área principal que ocupa o espaço disponível entre navbar e footer */}
      <div className="flex-grow flex items-center justify-center px-4">
        {/* Caixa com fundo semitransparente preto, arredondada, com padding e texto branco */}
        <div className="bg-black/40 p-8 rounded-xl text-white text-center w-full max-w-3xl min-h-[600px] flex flex-col items-center justify-center">
          
          {/* Texto principal acima dos cards */}
          <p className="text-xl mb-8">Desfrute das melhores ofertas</p>

          {/* Container flexível que organiza os cards lado a lado com espaçamento */}
          <div className="flex flex-wrap gap-6 justify-center">

            {/* Card Oferta 1 */}
            <div className="bg-[#28331c] text-white rounded-lg p-4 w-40 shadow-lg">
              <h2 className="text-lg font-semibold mb-2">Oferta 1</h2>
              {/* Imagem da oferta */}
              <img src={pontoT1} alt="" />
              {/* Descrição da oferta */}
              <p className="text-sm">Esta com 30% de desconto para pagamento a vista</p>
            </div>

            {/* Card Oferta 2 */}
            <div className="bg-[#28331c] text-white rounded-lg p-4 w-40 shadow-lg">
              <h2 className="text-lg font-semibold mb-2">Oferta 2</h2>
              {/* Imagem da oferta */}
              <img src={pontoT2} alt="" />
              {/* Descrição da oferta */}
              <p className="text-sm">Esta com 15% de desconto para pagamento a vista</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Rodapé fixado ao final da página */}
      <Footer />
    </div>
  );
};

export default SaibaMais;
