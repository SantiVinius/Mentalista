function Chutar() {
  var inputNumber = parseInt(document.getElementById('valor').value)

  if (inputNumber == valorAleatório) {
    document.getElementById('resultado').innerHTML = 'Parabéns, você acertou! Era o número ' + valorAleatório
  } else if (inputNumber < 0 || inputNumber > 10) {
    document.getElementById('resultado').innerHTML = 'Ops, insira um valor de 0 a 10.'
  } else if (inputNumber > valorAleatório){
    document.getElementById('resultado').innerHTML = 'Ops, você errou :( o número é menor!'
  } else {
    document.getElementById('resultado').innerHTML = 'Ops, você errou :( o número é maior!'
  }

  tentativas--
  document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativas

  if (tentativas == 0 && inputNumber != valorAleatório) {
    document.getElementById('resultado').innerHTML = 'Poxa, você não conseguiu acertar. O número era ' + valorAleatório
  }
}

var valorAleatório = parseInt(Math.random() * 11)

var tentativas = 3; 
