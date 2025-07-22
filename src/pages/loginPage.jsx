import React from "react";
// Importa a barra de navegação
import Navbar from "../components/navbar";
// Importa o rodapé
import Footer from "../components/footer";
// Importa o formulário de login
import LoginForm from "../components/loginForm";

const LoginPage = () => {
    return (
        <>
            {/* Container principal com flex vertical, ocupa toda a altura da tela e configura background */}
            <div className="flex flex-col min-h-screen bg-cover bg-center">
                {/* Barra de navegação no topo */}
                <Navbar />
                
                {/* Área principal que cresce para preencher espaço disponível,
                    centraliza o conteúdo (LoginForm) vertical e horizontalmente,
                    e tem fundo cinza claro */}
                <div className="flex-grow flex items-center justify-center bg-gray-50">
                    {/* Formulário de login */}
                    <LoginForm />
                </div>
                
                {/* Rodapé */}
                <Footer />
            </div>
        </>
    );
};

export default LoginPage;
