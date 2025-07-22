Portal Turismo - React + Vite
Este projeto utiliza React com o bundler Vite para garantir um ambiente de desenvolvimento rápido, com recarregamento a quente (HMR) e configuração simples.

Sobre o Projeto
Portal Turismo é um site para divulgação de pontos turísticos, com funcionalidades de login e cadastro de usuários. A aplicação foi desenvolvida usando React para a interface, e Vite para otimização do build e experiência de desenvolvimento ágil.

Plugins e Ferramentas
O projeto pode utilizar os seguintes plugins para React no Vite:

@vitejs/plugin-react: plugin oficial que usa Babel para Fast Refresh e suporte JSX.

@vitejs/plugin-react-swc: alternativa que usa o compilador SWC para builds mais rápidos e suporte ao Fast Refresh.

Regras de Lint e Qualidade de Código
Para projetos de produção, é recomendável configurar ESLint com regras específicas para React e JavaScript/TypeScript. Se desejar, pode-se integrar o TypeScript ao projeto para uma melhor análise estática e lint com suporte a tipos usando typescript-eslint.

Para isso, confira o template oficial React + TypeScript do Vite:
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts