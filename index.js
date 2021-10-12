const fileutils = require('./fileutils');
const acelerarTempo = require('./acelerarTempo');
const formatarLegenda = require('./formatarLegenda');

const myArgs = process.argv.slice(2);
const nomeArquivo = myArgs[0];
const tempo = parseInt(myArgs[1]);
const nomeArquivoNovo = myArgs[2];

let linhas = new Array();
linhas = fileutils.lerLegenda(nomeArquivo);
const legendasModificadas = acelerarTempo(linhas, tempo);
const novaLegenda = formatarLegenda(legendasModificadas);
fileutils.salvarNovaLegenda(nomeArquivoNovo, novaLegenda);
