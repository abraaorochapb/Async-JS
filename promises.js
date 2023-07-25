// É literalmente a promessa de um valor que pode chegar em um ponto futuro 
// Utilizamos o objeto Promise e alguns métodos para nos auxiliar

const promessa = Promise.resolve(5+5)

console.log(`calculando`)

promessa.then(value => {
  console.log(`resultado: ${value}`)	
})

console.log(`calculando...`)

// Uma promisse pode conter um erro, ou dependendo de como o código é executado podemos receber um erro
// Utilizamos a função catch para capturar o erro

const promessa2 = Promise.resolve(4 * 'arroz')
.then((n) => {
  if(Number.isNaN(n)){
    throw new Error('Valores invalidos')
  }
}).catch((error) => {
  console.log(error)
})

// Com o metodo 'all' podemos executar varias promises, o JavaScript se carrega de verificar e retornar os valores finais

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30)
  }, 3000)
})

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values)
})