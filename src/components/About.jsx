// Importa a biblioteca React, necessária para usar JSX
import React from 'react';

/**
 * Componente AboutHero
 * --------------------
 * Exibe um “hero section” (banner de destaque) ocupando toda a altura da tela,
 * com imagem de fundo, overlay escuro e um gradiente
 * contendo título e texto centralizados.
 *
 * Props:
 *  - Img (string): URL da imagem de fundo.
 */
const AboutHero = (props) => {
  return (
    /* 
     * Div externa (container do hero)
     * ------------------------------------------------------------
     *  w-full     → largura 100%
     *  h-screen   → altura = altura total da janela
     *  bg-cover   → a imagem de fundo cobre todo o container
     *  bg-center  → imagem centralizada
     *  bg-no-repeat → impede repetição da imagem
     *  flex items-center justify-center → centraliza conteúdo interno
     *  relative   → define contexto para posicionar elementos absolutos
     *  overflow-hidden → esconde qualquer excedente
     *  style      → define a imagem de fundo via inline‑style usando a prop Img
     */
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${props.Img})` }}
    >
      {/* 
       * Overlay escuro semitransparente
       * absolute inset-0 → cobre 100% do container pai
       * bg-black/40      → cor preta com 40% de opacidade (Tailwind 0–100)
       * z-0              → posiciona atrás do conteúdo principal (menor z‑index)
       */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/*
       * Camada de conteúdo principal
       * ------------------------------------------------------------
       * bg-gradient-to-b  → gradiente vertical (topo → base)
       * from-[#354225] via-[#28331c] to-[#1b2313] → cores do gradiente
       * text-white        → texto branco
       * text-center       → centraliza texto
       * w-full h-screen   → ocupa toda a tela para cobrir o overlay
       * flex items-center justify-center → centra o conteúdo vertical/horizontal
       * flex-col          → empilha elementos verticalmente (coluna)
       * px-4              → padding horizontal
       */}
      <div className="bg-gradient-to-b from-[#354225] via-[#28331c] to-[#1b2313] text-white text-center w-full h-screen flex flex-col items-center justify-center px-4">
        {/* Título principal */}
        <h1 className="text-4xl font-bold mb-4">Minha experiência</h1>

        {/* Parágrafo de descrição */}
        <p className="text-xl max-w-xl">
          Adorei aprender a fazer esse site e espero conseguir fazer muito mais,
          mas espero que eu não tenha a mesma dificuldade que eu tive para fazer
          esse site
        </p>
      </div>
    </div>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default AboutHero;
