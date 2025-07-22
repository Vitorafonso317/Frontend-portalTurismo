import React from "react";
// Importa o formulário de contato
import ContactForm from "../components/contactForm";
// Importa o rodapé da página
import Footer from "../components/footer";
// Importa a barra de navegação
import Navbar from "../components/navbar";

const ContactPage = () => {
    return (
        <>
            {/* Container principal que ocupa toda a altura da tela e organiza os elementos verticalmente */}
            <div className="flex flex-col min-h-screen bg-cover bg-center">
                {/* Barra de navegação fixa no topo */}
                <Navbar />

                {/* Área principal com o formulário de contato */}
                <div>
                    <ContactForm />
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    );
};

export default ContactPage;
