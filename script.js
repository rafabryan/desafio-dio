// Lista de heróis para teste
const herois = [
  { nome: "Artemis", xp: 800 },
  { nome: "Thor", xp: 6500 },
  { nome: "Athena", xp: 11000 }
];

// Função que retorna o nível do herói com base no XP
function classificarHeroi(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp >= 1001 && xp <= 2000) return "Bronze";
  else if (xp >= 2001 && xp <= 5000) return "Prata";
  else if (xp >= 5001 && xp <= 7000) return "Ouro";
  else if (xp >= 7001 && xp <= 8000) return "Platina";
  else if (xp >= 8001 && xp <= 9000) return "Ascendente";
  else if (xp >= 9001 && xp <= 10000) return "Imortal";
  else return "Radiante";
}

// Usando FOR
console.log("=== Classificação com FOR ===");
for (let i = 0; i < 1; i++) {
  const heroi = herois[i];
  const nivel = classificarHeroi(heroi.xp);
  console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
}

// Usando WHILE
console.log("=== Classificação com WHILE ===");
let j = 1;
while (j < 2) {
  const heroi = herois[j];
  const nivel = classificarHeroi(heroi.xp);
  console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
  j++;
}

// Usando DO...WHILE
console.log("=== Classificação com DO WHILE ===");
let k = 2;
do {
  const heroi = herois[k];
  const nivel = classificarHeroi(heroi.xp);
  console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
  k++;
} while (k < herois.length);
