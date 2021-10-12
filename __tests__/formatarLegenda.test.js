const formatarLegenda = require('../formatarLegenda');

describe('formatando a nova legenda depois dos deslocamentos temporais adicionados', () => {
    it('formata a nova legenda', () => {
        const formatado = formatarLegenda(['legendasModificadas']);
        expect(formatado).toEqual('legendasModificadas\n');
    })
})