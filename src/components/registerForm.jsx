// Importa React e o hook useState para controlar o estado dos campos do formulário
import React, { useState } from "react";

// Importa a biblioteca axios para fazer requisições HTTP
import axios from "axios";

// Importa a imagem de fundo
import Bg6 from "../assets/imagens/bg6.jpg";

// Componente funcional para o formulário de cadastro
const RegisterForm = () => {
    // Define os estados para os campos do formulário: nome, email e senha
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função executada ao enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página ao enviar

        try {
            // Faz uma requisição POST para a API, enviando os dados do formulário
            const response = await axios.post("http://localhost:5000/api/users", {
                name: nome,
                email,
                password: senha
            });

            // Se a requisição for bem-sucedida, exibe uma mensagem e redireciona para o login
            alert(`Usuário cadastrado com sucesso!\nNome: ${response.data.name}\nEmail: ${response.data.email}`);
            window.location.href = "/login"; // Redireciona o usuário para a página de login
        } catch (error) {
            // Se houver erro de resposta da API, mostra uma mensagem genérica de erro
            if (error.response) {
                alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
            } else {
                // Se não conseguir conectar ao servidor
                alert("Erro ao conectar ao servidor.");
            }
        }
    };

    return (
        // Container principal com fundo de imagem
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center w-full"
            style={{ backgroundImage: `url(${Bg6})` }} // Define a imagem de fundo
        >
            {/* Caixa branca central onde fica o formulário */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                {/* Título do formulário */}
                <h2 className="text-2xl font-semibold text-center mb-6">Cadastre-se</h2>

                {/* Formulário de cadastro */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Campo: Nome */}
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} // Atualiza o estado conforme o usuário digita
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500"
                            placeholder="Digite seu nome"
                        />
                    </div>

                    {/* Campo: E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500"
                            placeholder="Digite seu email"
                        />
                    </div>

                    {/* Campo: Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    {/* Botão de envio do formulário */}
                    <button
                        type="submit"
                        className="w-full bg-[#354225] text-white py-3 rounded-2xl hover:bg-[#1b2313] transition duration-300"
                    >
                        Criar conta
                    </button>
                </form>
            </div>
        </div>
    );
};

// Exporta o componente para ser usado em outras partes do projeto
export default RegisterForm;
