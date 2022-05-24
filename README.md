KenzieFy: Api de musicas.

Esta aplicação foi feita sem fins lucrativos para upload e consulta de musicas sem direitos autorais.

Sobre a aplicação: 

 - Está é uma api de musicas sem direitos autorais onde é possivel, escutar,
fazer download, ver os dados da musica e do seu autor, criar contas, fazer upload de musicas, login, criar playlist, atualizar as musicas que fez upload, deletar o usuario e/ou suas musicas.

 - Para fazer a consulta de musicas e dos seus autores, não é necessário fazer login ou ter conta.

 - Para fazer uplaod de alguma musica no banco de dados é necessário ter conta cadastrada.


Integrantes: 
 - André Rodrigues da Silveira.
 - Daniel Rodrigues.
 - Dylan Almeida.
 - Lorenzo Marques.
 - Márcio Castro.


url base da aplicação no heroku: "https://capstone-m4-grupo-14.herokuapp.com/".

Rotas:

1.0 - GET

1.1 - Para ler os dados de todas As Musicas, utilize a rota GET "/musics".

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
2.5 - Para classificar uma musica de 1 a 5 estrelas, utilize a rota "/rating/<music_id>".
Atenção! É necessário ter um token de autorização para acessar essa rota.



