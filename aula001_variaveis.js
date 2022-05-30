const prompt = require("prompt-sync")();
console.clear()

console.log('A copa do QATAR vai começar!');
console.log('Vocês estão animados?');
console.log('Quem será o nosso herói? Será ele o Neymar?');
console.log('1. (sim) 2. (não)');

pergunta1 = +prompt('O Brasil estará na copa?');
pergunta2 = +prompt('Neymar será o melhor jogador?');
pergunta3 = +prompt('Neymar será o artilheiro?');
pergunta4 = +prompt('O Brasil será campeão?');
pergunta5 = +prompt('Neymar será nosso herói?');

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

if (pontuacao == 0) {
console.log(`Horivel`);
} else if (pontuacao == 1 || pontuacao == 2) {
console.log(`Ruim`);
} else if (pontuacao == 3) {
console.log(`Médio`);
} else if (pontuacao == 4) {
console.log(`Bom`);
} else if (pontuacao == 5) {
console.log(`Será nosso herói`);
}
