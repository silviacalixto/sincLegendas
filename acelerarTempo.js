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
    return legendasModificadas;
    //formatarLegenda(legendasModificadas); Colocar essa função no executar
}