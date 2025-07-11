import React from "react";

const CardService = (props) => {
    return (
      <div
        className={`w-full max-w-sm sm:max-w-md md:max-w-lg
          bg-white border border-gray-200 rounded-xl shadow-md
          transition-transform duration-300 overflow-hidden mx-auto
          ${props.isActive ? "scale-105 shadow-xl" : "scale-95 hover:scale-100 hover:shadow-xl"}`}
        style={{ transformOrigin: "center" }}
      >
        <img
          src={props.img}
          alt={props.alt}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <div className="p-5 flex flex-col h-full">
          <h1 className="text-xl font-semibold text-gray-900">{props.titulo}</h1>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">{props.descricao}</p>
          <a
            href={props.link}
            className="mt-4 inline-block bg-[#354225] text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-[#1b2313] active:bg-[#1b2313] transition duration-300"
          >
            {props.botao}
          </a>
        </div>
      </div>
    );
  };
  
  export default CardService;
  