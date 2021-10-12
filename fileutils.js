const fs = require ('fs');

function parsearLegenda(legenda) {
    let data = fs.readFileSync('./legendas/' + legenda + '.str', { encoding: 'utf8' });
    let linhas = data.split('\n');
    return linhas;
}

function salvarNovaLegenda(novaLegenda, nomeArquivo) {
    fs.writeFileSync('./legendas/'+ nomeArquivo +'.str', novaLegenda);
}

module.exports = { parsearLegenda, salvarNovaLegenda }