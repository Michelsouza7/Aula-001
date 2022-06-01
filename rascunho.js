const prompt = require("prompt-sync")();
console.clear()

console.log("Polícia investiga assassinato de homem em São Paulo.\n");
console.log("Crime aconteceu no sábado, em uma área de mata de São Paulo!");
console.log("A polícia chega a um suspeito após seguir algumas pistas.");
console.log("Foram encontrados vestígios de pele nas unhas da vítima!");

console.log();

pergunta1 = +prompt('Você se sente nervoso ao ser intimado? [1]SIM [2]NÃO ');
console.log()
pergunta2 = +prompt('Você conhecia a vítima? [1]SIM [2]NÃO ');
console.log()
pergunta3 = +prompt('Se sim? [1]SIM [2]NÃO ');
console.log()
pergunta4 = +prompt('Ja tiveram algum desentendimento mal resolvido? [1]SIM [2]NÃO ');
console.log()
pergunta5 = +prompt('Possui marcas ou arranhões em seu corpo? [1]SIM [2]NÃO ');

let pontuacao = 0

if (pergunta1 == 1) {
pontuacao++
}
if (pergunta2 == 1) {
pontuacao++
}
if (pergunta3 == 1) {
pontuacao++
}       
if (pergunta4 == 1) {
pontuacao++
}
if (pergunta5 == 1) {
pontuacao++
}

if  (pontuacao  <=  2) {
    consola.log (`\nVocê é INOCENTE!`)
}  else  if  (pontuacao  ==  3) {
    consola.log (`\nVocê é SUSPEITO(A)!`)
}  else  if  (pontuacao  >=  4) {
    consola.log (`\nVocê é CULPADO(A)!`)
}
