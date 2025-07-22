// Importa a biblioteca React
import React from "react";

// Importa o componente personalizado que será usado para mostrar os cartões
import CardService from "./cardservice";

// Importa componentes e efeitos do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";

// Importa os estilos do Swiper
import "swiper/css";
import "swiper/css/effect-cube";

// Importa imagens dos pontos turísticos
import PontoT1 from "../assets/imagens/pontoT1.jpg";
import PontoT2 from "../assets/imagens/pontoT2.jpg";
import PontoT3 from "../assets/imagens/pontoT3.jpg";
import PontoT4 from "../assets/imagens/pontoT4.jpg";
import PontoT5 from "../assets/imagens/pontoT5.png";
import PontoT6 from "../assets/imagens/pontoT6.png";

// Lista de pontos turísticos com imagem, título e descrição
const tourist_places = [
  { Image: PontoT1, title: "Monte Fuji", description: "ponto turístico histórico" },
  { Image: PontoT2, title: "Catedral de Colônia", description: "ponto turístico religioso" },
  { Image: PontoT3, title: "Praia de Copacabana", description: "ponto turístico divertido" },
  { Image: PontoT4, title: "Pirâmides do Egito", description: "ponto turístico histórico" },
  { Image: PontoT5, title: "Torre de Pisa", description: "ponto turístico histórico" },
  { Image: PontoT6, title: "Praia de Cancun", description: "ponto turístico divertido" },
];

// Componente principal do carrossel
const Carousel = () => {
  return (
    <div className="relative z-10">
      {/* Título da seção */}
      <h1 className="text-3xl font-bold text-center mt-32 text-white drop-shadow-lg">
        Lugares turisticos
      </h1>

      {/* Componente Swiper (carrossel) */}
      <Swiper
        modules={[Autoplay, EffectCube]} // Módulos utilizados
        autoplay={{ delay: 3000, disableOnInteraction: false }} // autoplay de 3s
        centeredSlides={true} // Slide ativo fica centralizado
        loop={true} // Loop infinito
        slidesPerView={2} // Mostra 2 slides por vez (ajustável pelos breakpoints)
        spaceBetween={20} // Espaçamento entre slides

        // Ajuste responsivo
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* Mapeia os lugares turísticos e gera um slide para cada um */}
        {tourist_places.map((place, index) => (
          <SwiperSlide key={index}>
            {/* Wrapper para animação de transição suave ao passar o slide */}
            <div className="transition-transform duration-300 ease-in-out swiper-slide-scale">
              <CardService
                img={place.Image}          // Imagem do local
                alt={place.description}    // Texto alternativo
                titulo={place.title}       // Título do local
                descricao={place.description} // Descrição do local
                link="#"                   // Link fictício (poderia ser uma página do local)
                botao="Saiba Mais"         // Texto do botão
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Comentado, mas aqui você pode adicionar estilização adicional se quiser dar destaque ao slide ativo */}
      {/* Exemplo: deixar o slide central com maior escala ou sombra diferente */}
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default Carousel;
