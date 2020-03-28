const Reader = require("./Reader");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados  = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
    
    var html = await HtmlParser.Parser(usuarios);

    // gera HTML
    //escritor.writer(Date.now() + ".html", html);
    // gera PDF
    PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();