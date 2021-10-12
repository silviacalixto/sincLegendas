const fs = require ('fs');
const fileutils = require('../fileutils');

jest.mock('fs');

describe('fileutils', () => {
    describe('lerLegenda', () => {
        it('faz a leitura do arquivo', () => {
            fs.readFileSync.mockReturnValueOnce('teste');
            const resultado = fileutils.lerLegenda('legenda');
            expect(resultado).toEqual(['teste']);
        })
    })
    describe('salvarNovaLegenda', () => {
        it('salva a nova legenda em novo arquivo', () => {
            fileutils.salvarNovaLegenda('legendanova1','conteudo');
            expect(fs.writeFileSync).toHaveBeenCalledWith('./legendas/legendanova1.str','conteudo');
        })
    })
    
    
})