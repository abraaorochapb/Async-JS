// Sao funções que retornam promises 

async function somaDelay(num1, num2) {
  return num1 + num2
} 

somaDelay(1, 2).then(value => {
  console.log(value)
})

console.log('Teste async')