import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Backgroundimage from "../assets/imagens/bg.png";

const Home = () => {
    return (
     <>
        <div
            className="flex flex-col min-h-screen bg-cover bg-center"
           
        >
            <Navbar />
            <div>
                <Hero imagem={Backgroundimage}
                titulo = "nova serra azul" paragrafo = "descubra as novas atrações" />              
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Home;
