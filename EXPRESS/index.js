// Trabalhando com Rotas no EXPRESS Definindo direto na Rota


const express = require ("express") //Importando o Express
const app = express(); // Iniciando o express


app.get("/", function(req, res) {  // Direcionamento para Página inicial "/" 

    res.send(" Bem vindo a minha página"); // Enviando para o usuário oque ele vai ver/ entrar

 // res.send("Outra resposta");  não irá funcionar, pq quando vc inciar a resposta uma 1 vc fecha a conexão com o cliente
 //  e caso tente novamente não conseguirá

});


app.get("/cha", function(req, res) {  

    res.send("https://ramonrodsou.github.io/Challenge-Encriptador/");
})

app.get("/port", function(req, res) {  

    res.send("https://ramonrodsou.github.io/Portifolio/");
})  

app.get ("/ola/:nome/:empresa" , function(req, res){

    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RED => DADOS QUE VAI SER ENVIADO PARA O USUÁRIO

    // Paramentros Obrigatórios 
    var nome = req.params.nome; // pega o parametro "/:nome"
    var empresa = req.params.empresa;
    // Pega o Parametro Obrigatorio passado pelo usuário e mostra na tela
    res.send("<h1> Oi " + nome + " do " + empresa + "</h1>");
})

app.get ("/doc/:artigo?" , function(req, res){

    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RED => DADOS QUE VAI SER ENVIADO PARA O USUÁRIO

    // Paramentros Não Obrigatórios 
    var artigo = req.params.artigo; // pega o parametro "/:artigo?"
    
        if (artigo){

            res.send("<h2>Artigo: " + artigo + " </h2>")
        }

        else {
        // Pega o Parametro Não Obrigatorio passado pelo usuário e mostra na tela
        res.send("<h3> Acessando sem passar o Paramentro</h3>");
        }
})


app.get ("/canal", function(req, res){
    
    // Trabalhando com o Parametro " Query", ele é totalmente aberto, livre, dinamicos e opcionais
    // esta meio que entrando em des-uso 

    var canal = req.query["canal"];

    if(canal){

        res.send(canal);
    }

    else {

        res.send ("Nenhum canal fornecido!");
    }
})

app.listen(4000, function(erro){ // Direcionando a porta ( localhost:4000)
 
    if (erro) {

        console.log ("OCorreu um erro!");
    }
    else {

        console.log("Servidor iniciado com sucesso!");
    }
})