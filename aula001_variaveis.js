const prompt = require("prompt-sync")();
console.clear()

console.log("A copa do QATAR vai começar!\n");
console.log("Vocês estão animados?");
console.log("Quem será o nosso herói? Será ele o Neymar?\n");

pergunta1 = +prompt('O Brasil estará na copa? [1]SIM [2]NÃO ');
console.log()
pergunta2 = +prompt('Neymar será o melhor jogador? [1]SIM [2]NÃO ');
console.log()
pergunta3 = +prompt('Neymar será o artilheiro? [1]SIM [2]NÃO ');
console.log()
pergunta4 = +prompt('O Brasil será campeão? [1]SIM [2]NÃO ');
console.log()
pergunta5 = +prompt('Neymar será nosso herói? [1]SIM [2]NÃO ');

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
console.log(`\nHorivel`);
} else if (pontuacao == 1 || pontuacao == 2) {
console.log(`\nRuim`);
} else if (pontuacao == 3) {
console.log(`\nMédio`);
} else if (pontuacao == 4) {
console.log(`\nBom`);
} else if (pontuacao == 5) {
console.log(`\nSerá nosso herói`);
}

