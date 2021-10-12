const formatarLegenda = require('../formatarLegenda');

describe('formatando a função', () => {
    it('formatarLegenda', () => {
        const formatado = formatarLegenda(['legendasModificadas']);
        expect(formatado).toEqual('legendasModificadas\n');
    })
})