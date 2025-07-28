// Importa React e os hooks necessários
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Componente funcional Navbar
const Navbar = () => {
    // Estado para controlar se o menu mobile está aberto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Estado para verificar se o usuário está autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Estado para armazenar o termo de busca digitado
    const [searchTerm, setSearchTerm] = useState("");

    // Verifica se o usuário está logado ao carregar o componente
    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user); // converte para booleano
    }, []);

    // Alterna o menu no modo mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // remove o usuário do localStorage
        setIsAuthenticated(false); // atualiza estado
        window.location.href = '/'; // redireciona para a home
    };

    // Função executada ao enviar o formulário de busca
    const handleSearch = (e) => {
        e.preventDefault(); // previne reload
        alert(`Buscando por: ${searchTerm}`);
        // Aqui você pode adicionar redirecionamento ou lógica de busca real
    };

    // Links do menu (usados no desktop e no mobile)
    const menuLinks = (
        <>
<<<<<<< HEAD
            <a href="/" className="text-white hover:text-[#354225] transition duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-white hover:text-[#354225] transition duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-white hover:text-[#354225] transition duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-white hover:text-[#354225] transition duration-300 text-lg font-medium">Contato</a>

            {/* Condicional: se logado, mostra perfil e logout; senão, mostra login */}
=======
                        <Link to="/" className="text-white hover:text-[#354225] text-lg font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-[#354225] text-lg font-medium">Sobre</Link>
            <Link to="/service" className="text-white hover:text-[#354225] text-lg font-medium">Serviços</Link>
            <Link to="/contact" className="text-white hover:text-[#354225] text-lg font-medium">Contato</Link>
            <Link to="/profile" className="text-white hover:text-[#354225] text-lg font-medium">Perfil</Link>

>>>>>>> 00bff297de619e5c52e0c18e72134483812b78aa
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-[#354225] transition duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-green-100 transition duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-[#354225] transition duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-t from-[#354225] via-[#1b2313] to-[#000400] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-white">Nova Serra Verde</a>
                    </div>

                    {/* Menu Desktop + Busca */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuLinks}

                        {/* Barra de busca para desktop */}
                        <form onSubmit={handleSearch} className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar..."
                                className="px-3 py-1 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button
                                type="submit"
                                className="bg-[#28331c] text-white px-3 py-1 rounded-md hover:bg-[#354225]"
                            >
                                Buscar
                            </button>
                        </form>
                    </div>

                    {/* Ícone do menu mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    // Ícone de "X" quando o menu está aberto
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    // Ícone de menu quando está fechado
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile visível apenas se aberto */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-t from-green-400 via-green-600 to-green-800 px-4 py-4 space-y-4 flex flex-col">
                    {menuLinks}

                    {/* Barra de busca para mobile */}
                    <form onSubmit={handleSearch} className="flex flex-col space-y-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="..."
                            className="px-3 py-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
};

// Exporta o componente para uso em outras páginas
export default Navbar;
