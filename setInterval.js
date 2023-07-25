// Semelghante a Set time out, porém ela nao para de ser executada, temos sua chamada
// definida pelo tempo de espera na execução 
// É como um loop infinito por um tempo determinado

console.log('ainda nao executou')

setInterval(function(){
  console.log('executando')
}, 3000)

console.log('ainda nao executou 2')