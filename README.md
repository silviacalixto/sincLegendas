## Sincronizador de legendas

Projeto que faz a leitura de arquivos de legendas localizados na pasta "legenda", aplica deslocamentos temporais em segundos a todos os timecodes da legenda e salva a legenda modificada em um novo arquivo. 

### Setup

Rodar no diretório do projeto: `npm install`
Obs.: deve-se adicionar os arquivos de legenda na pasta "legenda" para que o programa funcione.

### Para rodar o projeto

Utilizar na linha de comando (incluindo os parâmetros): `node index.js <nomeArquivo> <tempo> <nomeArquivoNovo>`
Ex.: `node index.js legenda1 5 legenda1nova`

Para realização dos testes, aplicar no diretório do projeto: `npm test`



