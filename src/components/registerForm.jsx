import React, { useState} from "react";
import Bg6 from "../assets/imagens/bg6.jpg";


const RegisterForm = () =>{
    const [nome ,setNome] = useState('')
    const [email ,setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        const novoUsuario ={nome, email}
        localStorage.setItem('user', JSON.stringify(novoUsuario) )
        window.location.href='/'
    }
    return (
        <>
        <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${Bg6})` }}
        >
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                
                <h2 className="text-2xl font-semibold text-center mb-6">Cadastre-se</h2>
                <form onSubmit={handleSubmit}>
                <div>
                        <label>digite seu nome</label>
                        <input
                          id="nome"
                          type="nome"
                          name="nome"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          required
                          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Digite seu nome" />
                    </div>
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
                            placeholder="Digite seu nome"
                        />
                    </div>
                    
                     
                    <button type="submit" className="w-full bg-[#354225] text-white py-3  hover:bg-[#1b2313] transition pt-3 rounded-2xl">
                        Criar conta
                    </button>
                </form>
               
            </div>         
        </div>
          </>
    )
}

export default RegisterForm