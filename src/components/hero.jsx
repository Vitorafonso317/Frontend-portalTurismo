import React from "react";
import { Link } from "react-router";

const Hero = (props) => {
    return (
        <>
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${props.imagem})` }}
        >
            {/* Removi o <div/> inválido */}
            
            <div className=" relative z-10 text-center p-4 text-white bg-opacity-30 rounded-lg">
                <h1 className=" text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.titulo}
                </h1>
                <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.paragrafo}
                </p>
                <Link
                     to="/sobre" // exemplo de rota
                     className="bg-[#354225] hover:bg-[#0d1409] text-white px-6 py-3 rounded-lg transition duration-300"
                   >
                   Saiba Mais
                </Link>
            </div>
        </div>
        </>
    );
};

export default Hero;


