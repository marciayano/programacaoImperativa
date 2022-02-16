let objetoServidor = {
  acesso: true,
  login: "mundojs"
  };

let objetoServidor2 = {
  erro: "Erro ao conectar ao servidor",
  acesso: null
}


function conexaoLogIn(respostaDoServidor){
  if (respostaDoServidor.erro==null) {
    if (respostaDoServidor.acesso){
      console.log('login: {respostaDoServidor.login}');
  }else{
    console.log("acesso negado!");
  }
  }
conexaoLogIn (objetoServidor.acesso);
