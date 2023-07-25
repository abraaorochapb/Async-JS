// A instrução await serve para aguardar o resultado de uma Async function 
// Tornando mais simples lidar com esse tipo de fuções, desta maneira nao lidamos diretamente com promises

async function resolveComDelay(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolveu a promise')
    }, 2000)
  })
}

async function chamadaAsync(){
  console.log('Chamando a Promise, e esperando o resultado')
  console.log(await resolveComDelay())
}

chamadaAsync()