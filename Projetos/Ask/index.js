const express = require ("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View Engine = motor de HTML
app.set ('view engine' , 'ejs');

app.get("/:nome/:lang", (req, res) => {

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    // render = desenhar algo na tela
    res.render("index", {

        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8040,
        msg: exibirMsg
    });
});

app.listen(8080, () => { 

    console.log("App Rodando!");
});