*Consciência Ecológica na sua TV!*
Este projeto tem como objetivo criar uma API para recomendar filmes infantis que abordam temas de consciência ambiental, ajudando a promover a conscientização ecológica entre as crianças, recomendando filmes por Autor, por ID e etc.



*Estrutura do Projeto*
O projeto está estruturado da seguinte forma:

/controllers: Pasta que contém os controladores da aplicação. Cada controlador é responsável por lidar com as requisições HTTP e chamar os serviços apropriados.

/models: Pasta que contém os modelos de dados da aplicação. Aqui estão definidos os schemas ou estruturas dos dados dos filmes e outros recursos necessários.

/routes: Pasta que contém as definições das rotas da API. As rotas são mapeadas para os métodos dos controladores.

server.js: Arquivo principal que configura e inicializa o servidor Express, define middlewares e conecta com o banco de dados, se aplicável.

package.json: Arquivo que lista as dependências do projeto e contém scripts úteis, como start para iniciar o servidor.



*Tecnologias Utilizadas*
Node.js: Plataforma para construção do servidor da API.

Express.js: Framework web para Node.js, utilizado para simplificar o roteamento e gestão de requisições HTTP.

Nodemon: Facilitar o desenvolvimento e aumentar a produtividade. Nodemon é uma ferramenta que monitora mudanças nos arquivos do projeto e automaticamente reinicia o servidor Node.js

*Instalação*
1. Clone o repositório:
git clone https://github.com/hestturia/Mini-Projeto-M4

2.Instale as dependências:
npm install

*Execute a aplicação
npm run start
