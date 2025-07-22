import React from "react";
// Importa o rodapé
import Footer from "../components/footer";
// Importa a barra de navegação
import Navbar from "../components/navbar";
// Importa o componente Hero (seção principal com imagem e texto)
import Hero from "../components/hero";
// Importa a imagem de background para o Hero
import Backgroundimage from "../assets/imagens/bg.png";

const Home = () => {
    return (
        <>
            {/* Container principal, usa flex em coluna, ocupa toda a altura da tela e define estilos para background */}
            <div className="flex flex-col min-h-screen bg-cover bg-center">
                {/* Barra de navegação no topo */}
                <Navbar />
                <div>
                    {/* Componente Hero recebe props para imagem, título e parágrafo */}
                    <Hero 
                        imagem={Backgroundimage} 
                        titulo="nova serra azul" 
                        paragrafo="descubra as novas atrações" 
                    />
                </div>
                {/* Rodapé */}
                <Footer />
            </div>
        </>
    );
};

export default Home;
