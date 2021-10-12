const fs = require ('fs');

function lerLegenda(nomeArquivo) {
    let data = fs.readFileSync('./legendas/' + nomeArquivo + '.str', { encoding: 'utf8' });
    let linhas = data.split('\n');
    return linhas;
}

function salvarNovaLegenda(nomeArquivoNovo, novaLegenda) {
    fs.writeFileSync('./legendas/'+ nomeArquivoNovo +'.str', novaLegenda);
}

module.exports = { lerLegenda, salvarNovaLegenda }