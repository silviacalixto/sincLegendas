
function formatarLegenda(legendasModificadas) {
    let novaLegenda = "";
    for(let i = 0; i < legendasModificadas.length; i++) {
        novaLegenda = novaLegenda + legendasModificadas[i] + '\n';
    }
    return novaLegenda;
}

module.exports = formatarLegenda