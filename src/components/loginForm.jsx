// Importa React e o hook useState para controle dos campos do formulário
import React, { useState } from "react";

// Importa axios para fazer requisições HTTP
import axios from "axios";

// Importa o hook useNavigate para redirecionamento após o login
import { useNavigate } from "react-router-dom";

// Importa imagem de fundo
import bg5 from "../assets/imagens/bg5.jpg";

// Componente funcional LoginForm
const LoginForm = () => {
  // Estado para armazenar e-mail e senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Hook para navegação após login
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede recarregamento da página

    try {
      // Envia os dados de login para a API
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password: senha, // envia a senha com a chave esperada pelo backend
      });

      const userData = response.data;

      // Salva os dados do usuário logado no localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Usuário logado com sucesso!!");

      // Redireciona para a home após login bem-sucedido
      navigate("/");
    } catch (error) {
      // Se o servidor respondeu com erro (ex: senha incorreta)
      if (error.response) {
        alert("Erro ao logar usuário: email ou senha incorretos");
      } else {
        // Se houve falha de conexão
        alert("Erro ao conectar ao servidor");
      }
    }
  };

  // JSX do componente
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${bg5})` }}
<<<<<<< HEAD
      >
        {/* Caixa branca com o formulário */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          
          {/* Título do formulário */}
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
=======
        >
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>E-mail</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base mb-6"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#354225] text-white py-3  hover:bg-[#1b2313] transition pt-3 rounded-2xl">
                        Entrar
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600"> não tem uma conta,
                    <a href="/register" className="text-[#28331c] hover:underline text-center p-2"> Cadastre-se</a>
                </p>
            </div>         
        </div>
          </>
    )
}
>>>>>>> 00bff297de619e5c52e0c18e72134483812b78aa

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            
            {/* Campo de e-mail */}
            <div>
              <label>E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base"
                placeholder="Digite seu email"
              />
            </div>

            {/* Campo de senha */}
            <div>
              <label>Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base mb-6"
                placeholder="Digite sua senha"
              />
            </div>

            {/* Botão de envio */}
            <button
              type="submit"
              className="w-full bg-[#354225] text-white py-3 hover:bg-[#1b2313] transition pt-3 rounded-2xl"
            >
              Entrar
            </button>
          </form>

          {/* Link para cadastro */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem uma conta?
            <a href="/register" className="text-[#28331c] hover:underline text-center p-2">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para ser usado em outras páginas
export default LoginForm;
