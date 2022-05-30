const prompt = require("prompt-sync")();

pergunta1 = +prompt('O Brasil estará na copa?');
pergunta2 = +prompt('');
pergunta3 = +prompt('');
pergunta4 = +prompt('');
pergunta5 = +prompt('');

let  = 0


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

if (pontuacao == 0) {
console.log(`Horivel`)
} else if (pontuacao == 1 || pontuacao == 2) {
console.log(`Ruim`)
} else if (pontuacao == 3) {
console.log(`Médio`)
} else if (pontuacao == 4) {
console.log(`Bom`)
} else if (pontuacao == 5) {
console.log(`Muito Bom`)
}