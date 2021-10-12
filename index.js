const fs = require ('fs');
const datefns = require ('date-fns');



// executar('legenda1', 5);

function executar(legenda, tempo) {
    let linhas = new Array();
    linhas = parsearLegenda(legenda);
    console.log(linhas);
    //tempo = 5;
    acelerarTempo(linhas, tempo);
}

function parsearLegenda(legenda) {
    let data = fs.readFileSync('./legendas/' + legenda + '.str', { encoding: 'utf8' });
    let linhas = data.split('\n');
    return linhas;
}

// function salvarNovaLegenda(novaLegenda, nomeArquivo) {
//     console.log(novaLegenda);
//     fs.writeFile('./legendas/'+ nomeArquivo +'.str', novaLegenda, function(err) {
//         if(err) {
//             return console.log('erro');
//         }
//         console.log('Arquivo criado');
//     });
// }

function salvarNovaLegenda(novaLegenda, nomeArquivo) {
    console.log(novaLegenda);
    fs.writeFileSync('./legendas/'+ nomeArquivo +'.str', novaLegenda);
    console.log('legenda salva');
}

function formatarLegenda(legendasModificadas) {
    let novaLegenda = "";
    for(let i = 0; i < legendasModificadas.length; i++) {
        novaLegenda = novaLegenda + legendasModificadas[i] + '\n';
    }
    salvarNovaLegenda(novaLegenda);
}

function acelerarTempo (linhas, tempo) {
    let legendasModificadas = new Array();

        for(var linha of linhas) {
            console.log(linha);
            if (linha.includes('-->')) {
                const timecodes = linha.split(' --> ');
                console.log(timecodes);

                for(let i = 0; i < timecodes.length; i++) {
                    timecodes[i] = datefns.parse(timecodes[i], 'HH:mm:ss,SSS', new Date());
                    console.log(timecodes);
                    timecodes[i] = datefns.addSeconds(timecodes[i], tempo);
                    timecodes[i] = datefns.format (timecodes[i], "HH:mm:ss,SSS");
                }

                timecodes[0] = timecodes[0] + " --> ";
                linha = timecodes.toString();
                linha = linha.slice(0, 17) + linha.slice(18, linha.length);
                
            }
            legendasModificadas.push(linha);
            console.log("------------------------------")
            console.log(legendasModificadas);
        }

    formatarLegenda(legendasModificadas);
}

module.exports = { executar, parsearLegenda, acelerarTempo, formatarLegenda, salvarNovaLegenda }





