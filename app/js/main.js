// Fix para ativar o Hot reload para alteracoes no "index.pug" (e seus includes) caso nao seja PROD 
// A variavel "NODE_ENV" vem do "webpack.config.babel.js"
if (NODE_ENV !== 'PROD') {
    require('../pug/index.pug');
}
// Style
import '../sass/main.scss';

// Teste de comentario para ser removido na minificacao
document.getElementById('textScript').innerHTML = 'Import do JS funcionando!';