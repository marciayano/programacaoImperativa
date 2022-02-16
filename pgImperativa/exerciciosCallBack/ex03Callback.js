

function cumprimentar(nome) {
    console.log('Olá, ' + nome);
  }
  
  function incluirNome(callback) {
    let nome = 'Vanessa'
    callback(nome);
  }
  
  incluirNome(cumprimentar);