import React from "react";
// Importa o componente que contém o conteúdo da seção "Sobre"
import AboutHero from "../components/About";
// Importa o rodapé do site
import Footer from "../components/footer";
// Importa a barra de navegação (menu)
import Navbar from "../components/navbar";
// Importa a imagem de fundo usada na página
import bg from "../assets/imagens/bg4.jpg"

const AboutPage = () => {
    return (
        <>
            {/* Container principal que ocupa toda a altura da tela, com background fixo */}
            <div 
                className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bg})` }} // Aplica a imagem de fundo
            >
                {/* Componente Navbar fixo no topo */}
                <Navbar/>

                {/* Conteúdo principal da página, com espaçamento interno e margem superior para evitar sobreposição da Navbar */}
                <div className="p-8 mt-16">
                    {/* Componente com o conteúdo da seção "Sobre" */}
                    <AboutHero />
                </div>

                {/* Componente do rodapé da página */}
                <Footer/>
            </div>
        </>
    )
}

// Exporta o componente para uso na aplicação
export default AboutPage
