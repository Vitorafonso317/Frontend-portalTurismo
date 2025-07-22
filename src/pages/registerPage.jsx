import React from "react";
// Importa o rodapé do site
import Footer from "../components/footer";
// Importa a barra de navegação
import Navbar from "../components/navbar";
// Importa o formulário de cadastro
import RegisterForm from "../components/registerForm";

const RegisterPage = () => {
    return (
        <>
            {/* Container principal com layout em coluna e altura mínima da tela */}
            <div className="flex flex-col min-h-screen bg-cover bg-center">
                {/* Barra de navegação no topo */}
                <Navbar />
                
                {/* Área principal onde fica o formulário de cadastro */}
                <div>
                    <RegisterForm />
                </div>
                
                {/* Rodapé */}
                <Footer />
            </div>
        </>
    );
};

export default RegisterPage;
