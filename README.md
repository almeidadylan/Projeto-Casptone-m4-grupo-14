<h1 align="center">KenzieFy</h1>
 <p align="center"> 
 <a href="#Sobre"> Sobre </a>  -  
 <a href="#Integrantes"> Integrantes </a>  -  
 <a href="#Rotas"> Rotas </a> -
 <a href="#Tecnologias">Tecnologias</a>
 </p>

<br>

# Sobre

 - Esta aplicação foi feita sem fins lucrativos para upload e consulta de musicas sem direitos autorais.
 - Está é uma api de musicas sem direitos autorais onde é possivel, escutar,
fazer download, ver os dados da musica e do seu autor, criar contas, fazer upload de musicas, login, criar playlist, atualizar as musicas que fez upload, deletar o usuario e/ou suas musicas.

 - Para fazer a consulta de musicas e dos seus autores, não é necessário fazer login ou ter conta.

 - Para fazer upload de alguma musica no banco de dados é necessário ter conta cadastrada.
<br>


# Integrantes
 - <a href="https://github.com/andrejubi">André Rodrigues da Silveira.</a> <br>
 - <a href="https://github.com/danielrodriguesdnl">Daniel Rodrigues.</a> <br>
 - <a href="https://github.com/almeidadylan">Dylan Almeida.</a> <br>
 - <a href="https://github.com/LorenzoMarques">Lorenzo Marques.</a> <br>
 - <a href="https://github.com/mcastroneto">Márcio Castro.</a> <br>
<br>

url base da aplicação no heroku: https://capstone-m4-grupo-14.herokuapp.com/

# Tabela de conteudo
<!--ts-->
   * [test1](#Sobre)
   * [teste2](#tabela-de-conteudo)
   * [teste3](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te--> 


# Rotas

1.0 - GET

``GET /musics - formato de resposta - status 201``
```json
{
    "TESTE": "TESTE"
}
```

1.2 - Para ler os dados de uma musica especifica e do seu autor, utilize a rota "/musics/<music_id>".

1.3 - Para ler os dados de todos os autores de musica, utilize a rota "/autor".

1.4 - Para ler os dados de um autor especifico, utilize a rota "/autor/<autor_id>".

1.5 - Para fazer uma listagem de todos os usuario, utilize a rota "/users".

1.5 - Para ler os dados de um usuario especifico e o seu endereço, utilize a rota "/users/<user_id>".
Atenção! é necessário ter o token de autorização para acessar essa rota.

1.6 - Para listar todas as playlists de um usuario, utilize a rota: "/playlist/<user_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.


2.0 - POST

2.1 - Para criar uma conta de usuario, utilize a rota "/user".

2.2 - Para fazer login em uma conta, utilize a rota "/login".

2.3 - Para criar fazer upload de uma musica, utilize a rota "/musics/<user_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.

2.4 - Para adicionar um endereço para o usuario, utilize a rota "/address/<user_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.

2.5 - Para criar uma playlist de musica, utilize a rota "/playlist/<user_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.  

2.6 - Para adicionar uma musica que ja existe no banco de dados, utilize a rota "/playlist/<playlist_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.


3.0 - PATCH:

3.1 - Para atualizar os dados de um usuario, utilize a rota "/user/<user_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.

3.2 - Para atualizar o endereço do usuario, utilize a rota "/user/<adress_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.

3.3 - Para classificar uma musica de 1 a 5 estrelas, utilize a rota "/rating/<music_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.


4.0 - DELETE:

4.1 - Para deletar uma musica de sua criação, utilize a rota "/music/<music_id>".
OBS: não é possível deletar uma musica que você não fez upload.
Atenção! É necessário ter um token de autorização para acessar essa rota.

4.2 - Para deletar uma playlist, utilize a rota "/playlist/<playlist_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.

4.3 - Para deletar um usuario, utilize a rota "/user/<user_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.

#  Tecnologias

 - <a href="https://www.typescriptlang.org/">Typescript</a>
 - <a href="https://nodejs.org/en/">NodeJs</a>
 - <a href="https://yarnpkg.com/">Yarn</a>
 - <a href="https://git-scm.com/">Git</a>
 - <a href="https://github.com">GitHub</a>
 - <a href="https://www.npmjs.com/package/multer">Multer</a>
 - <a href="https://www.npmjs.com/package/multer-s3">Multer-s3</a>
 - <a href="https://aws.amazon.com/pt/s3/">AWS-S3</a>
 - <a href="https://www.npmjs.com/package/aws-sdk">AWS-SDK</a>
 - <a href="https://heroku.com">Heroku</a>
 - <a href="https://www.postgresql.org/">PostgreSQL</a>
 - <a href="https://www.npmjs.com/package/uuid">uuid</a>
 - <a href="https://expressjs.com/pt-br/">Express</a>
 - <a href="https://typeorm.io/">Typeorm</a>
 - <a href="https://jwt.io/">jwt</a>
 - <a href="https://www.npmjs.com/package/bcrypt">Bycript</a>
 - <a href="https://www.npmjs.com/package/pg">Pg</a>



