// Importa a biblioteca React
import React from "react";

/**
 * Componente CardService
 * ----------------------
 * Exibe um card com imagem, título, descrição e botão de ação.
 * Props esperadas:
 * - img: URL da imagem a ser exibida
 * - alt: texto alternativo da imagem
 * - titulo: título do card
 * - descricao: texto descritivo
 * - botao: texto do botão
 * - link: URL de destino do botão
 * - isActive: booleano opcional para aplicar destaque visual (escala maior)
 */
const CardService = (props) => {
  return (
    // Container do card
    <div
      className={`
        w-full max-w-sm sm:max-w-md md:max-w-lg           // largura adaptável por breakpoint
        bg-white border border-gray-200                   // fundo branco e borda cinza clara
        rounded-xl shadow-md                              // bordas arredondadas e sombra padrão
        transition-transform duration-300                 // animação suave ao transformar
        overflow-hidden mx-auto                          // esconde excessos e centraliza horizontalmente

        // Destaque visual se o card estiver "ativo"
        ${props.isActive
          ? "scale-105 shadow-xl"                         // aumenta o card e dá sombra extra
          : "scale-95 hover:scale-100 hover:shadow-xl"    // menor por padrão, cresce ao passar o mouse
        }`
      }
      // Define o ponto de origem da transformação como centro
      style={{ transformOrigin: "center" }}
    >
      {/* Imagem do card */}
      <img
        src={props.img}                        // URL da imagem vinda via props
        alt={props.alt}                        // Texto alternativo
        className="w-full h-48 sm:h-56 md:h-64 object-cover" // altura varia com breakpoint, imagem preenche espaço
      />

      {/* Área de conteúdo abaixo da imagem */}
      <div className="p-5 flex flex-col h-full">
        {/* Título do card */}
        <h1 className="text-xl font-semibold text-gray-900">
          {props.titulo}
        </h1>

        {/* Descrição do card */}
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          {props.descricao}
        </p>

        {/* Botão com link */}
        <a
          href={props.link} // URL do botão
          className="mt-4 inline-block 
            bg-[#354225] text-white text-sm font-medium
            px-4 py-2 rounded-full text-center
            hover:bg-[#1b2313] active:bg-[#1b2313]
            transition duration-300"
        >
          {props.botao} {/* Texto do botão */}
        </a>
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outros lugares
export default CardService;

  