import React from "react";
import CardService from "./cardservice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";


import PontoT1 from "../assets/imagens/pontoT1.jpg";
import PontoT2 from "../assets/imagens/pontoT2.jpg";
import PontoT3 from "../assets/imagens/pontoT3.jpg";
import PontoT4 from "../assets/imagens/pontoT4.jpg";
import PontoT5 from "../assets/imagens/pontoT5.png";
import PontoT6 from "../assets/imagens/pontoT6.png";

const tourist_places = [
  { Image: PontoT1, title: "Monte Fuji", description: "ponto turístico histórico" },
  { Image: PontoT2, title: "Catedral de Colônia", description: "ponto turístico religioso" },
  { Image: PontoT3, title: "Praia de Copacabana", description: "ponto turístico divertido" },
  { Image: PontoT4, title: "Pirâmides do Egito", description: "ponto turístico histórico" },
  { Image: PontoT5, title: "Torre de Pisa", description: "ponto turístico histórico" },
  { Image: PontoT6, title: "Praia de Cancun", description: "ponto turístico divertido" },
];

const Carousel = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-3xl font-bold text-center mt-32 text-white drop-shadow-lg">
        Lugares turisticos
      </h1>

      <Swiper
        modules={[Autoplay, EffectCube]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        centeredSlides={true} // 👈 Centraliza o slide ativo
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
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
        {tourist_places.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="transition-transform duration-300 ease-in-out swiper-slide-scale">
              <CardService
                img={place.Image}
                alt={place.description}
                titulo={place.title}
                descricao={place.description}
                link="#"
                botao="Saiba Mais"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilização para aumentar o slide ativo */}
    
    </div>
  );
};

export default Carousel;
