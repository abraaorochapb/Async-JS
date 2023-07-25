// Aqui estabelecemos uma ação a ser executada após um certo tempo

console.log('ainda nao executou')

setTimeout(function(){
  
  console.log('execução assíncrona')

}, 2000)

console.log('ainda nao executou 2')