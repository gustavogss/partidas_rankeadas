const prompt = require("prompt-sync")();

let victories = prompt('Digite a quantidade de vitorias: ');
let lost = prompt('Digite a quantidade de derrotas: ');

function matches(victories, lost) {
    return victories - lost
  }
  
  function rank() {
    let nivel = ""
    let saldoVitorias = matches(victories, lost)    
    if (saldoVitorias <= 10) {
      nivel = "Ferro"
    } else if (saldoVitorias <= 20) {
      nivel = "Bronze"
    } else if (saldoVitorias <= 50) {
      nivel = "Prata"
    } else if (saldoVitorias <= 80) {
      nivel = "Ouro"
    } else if (saldoVitorias <= 90) {
      nivel = "Diamante"
    } else if (saldoVitorias <= 100) {
      nivel = "Lendário"
    } else if (saldoVitorias >= 100) {
      nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`
  }
  
  console.log(rank())