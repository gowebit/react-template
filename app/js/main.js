// Fix para ativar o Hot reload para alteracoes no "index.html" caso nao seja PROD 
// A variavel "NODE_ENV" vem do "webpack.config.babel.js"
if (NODE_ENV !== 'PROD') {
    require('../index.html');
}
// Style
import '../sass/main.scss';

// Teste de comentario para ser removido na minificacao
document.getElementById('textScript').innerHTML = 'Import do JS funcionando!';