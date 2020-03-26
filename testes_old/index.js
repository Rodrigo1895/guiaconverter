const fs = require("fs");

modificarusuario("Rodrigo Rossetti de Lima", "ADS", "Desenvolvimento");

function modificarusuario(nome, curso, categoria) {
    fs.readFile("./usuario.json", { encoding: 'utf-8' }, (erro, dados) => {
        if(erro) {
            console.log("Ocorreu uma falha durante a leitura do arquivo!")
        } else {
            var conteudo = JSON.parse(dados);
            
            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;
    
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {
                if(erro){
                    console.log("Erro durante o salvamento do arquivo!");
                }
            });
        }
    });
}

// Escrita em arquivo
/*fs.writeFile("./rodrigo.txt", "Nome: Rodrigo Lima", (erro) => {
    if(erro){
        console.log("Erro durante o salvamento");
    }
});*/

// Leitura de arquivo
/*fs.readFile("./rodrigo.txt", { encoding: 'utf-8' }, (erro, dados) => {
    if(erro) {
        console.log("Ocorreu uma falha durante a leitura do arquivo!")
    } else {
        console.log(dados);
    }
});*/