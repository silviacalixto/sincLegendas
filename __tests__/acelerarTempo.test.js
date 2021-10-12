const acelerarTempo = require('../acelerarTempo');

describe('aplicando deslocamentos temporais aos timecodes da legenda', () => {
    it('adiciona deslocamentos temporais inteiros positivos', () => {
        const adicionado = acelerarTempo(['posicao', '01:02:03,000 --> 01:03:05,000', 'texto'], 1)
        expect(adicionado).toEqual(['posicao', '01:02:04,000 --> 01:03:06,000','texto'])
    })
    it('adiciona deslocamentos temporais inteiros negativos', () => {
        const adicionado = acelerarTempo(['posicao', '01:02:03,000 --> 01:03:05,000', 'texto'], -1)
        expect(adicionado).toEqual(['posicao', '01:02:02,000 --> 01:03:04,000','texto'])
    })
    it('adiciona o valor 0 aos deslocamentos temporais', () => {
        const adicionado = acelerarTempo(['posicao', '01:02:03,000 --> 01:03:05,000', 'texto'], 0)
        expect(adicionado).toEqual(['posicao', '01:02:03,000 --> 01:03:05,000','texto'])
    })
    it('trunca um valor que não seja inteiro para adiconar aos deslocamentos temporais', () => {
        const adicionado = acelerarTempo(['posicao', '01:02:03,000 --> 01:03:05,000', 'texto'], 1.5)
        expect(adicionado).toEqual(['posicao', '01:02:04,000 --> 01:03:06,000','texto'])
    })
})