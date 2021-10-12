const datefns = require ('date-fns');

function acelerarTempo (linhas, tempo) {
    let legendasModificadas = new Array();
        for(var linha of linhas) {
            if (linha.includes('-->')) {
                const timecodes = linha.split(' --> ');
                for(let i = 0; i < timecodes.length; i++) {
                    timecodes[i] = datefns.parse(timecodes[i], 'HH:mm:ss,SSS', new Date());
                    timecodes[i] = datefns.addSeconds(timecodes[i], tempo);
                    timecodes[i] = datefns.format (timecodes[i], "HH:mm:ss,SSS");
                }
            timecodes[0] = timecodes[0] + " --> ";
            linha = timecodes.toString();
            linha = linha.slice(0, 17) + linha.slice(18, linha.length);    
            }
            legendasModificadas.push(linha);
        }
    return legendasModificadas;
}

module.exports = acelerarTempo