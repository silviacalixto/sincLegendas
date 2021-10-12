const fs = require ('fs');
const fileutils = require('../fileutils');

jest.mock('fs');

describe('fileutils', () => {
    describe('parsearLegenda', () => {
        it('Leitura do arquivo', () => {
            fs.readFileSync.mockReturnValueOnce('teste');
            const resultado = fileutils.parsearLegenda('legenda');
            expect(resultado).toEqual(['teste']);
        })
    })
    describe('salvarNovaLegenda', () => {
        it('Salvamento da nova legenda', () => {
            fileutils.salvarNovaLegenda('conteudo','legendanova1');
            expect(fs.writeFileSync).toHaveBeenCalledWith('./legendas/legendanova1.str','conteudo');
        })
    })
    
    
})