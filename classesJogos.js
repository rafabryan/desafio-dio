/**
 * Calculadora de Partidas Rankeadas
 * Desafio DIO.me
 *
 * Requisitos:
 * - Receber vitórias e derrotas
 * - Calcular saldo (vitórias - derrotas)
 * - Classificar nível com base nas vitórias
 *
 * Uso:
 *   node calculadora_rankeadas.js
 */

const prompt = require('prompt-sync')({ sigint: true });

/**
 * Retorna o nível de acordo com a quantidade de vitórias.
 * @param {number} vitorias
 * @returns {string} nível
 */
function obterNivel(vitorias) {
  if (vitorias < 10) return 'Ferro';
  if (vitorias <= 20) return 'Bronze';
  if (vitorias <= 50) return 'Prata';
  if (vitorias <= 80) return 'Ouro';
  if (vitorias <= 90) return 'Diamante';
  if (vitorias <= 100) return 'Lendário';
  return 'Imortal';
}

/**
 * Calcula o saldo de rankeadas e o nível correspondente.
 * @param {number} vitorias
 * @param {number} derrotas
 * @returns {{saldo: number, nivel: string}}
 */
function calcularRankeadas(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  const nivel = obterNivel(vitorias);
  return { saldo, nivel };
}

function mainRankeadas() {
  console.log('\n=== Calculadora de Partidas Rankeadas ===');
  while (true) {
    const vitorias = Number(prompt('Informe o número de vitórias: '));
    const derrotas = Number(prompt('Informe o número de derrotas: '));

    if (isNaN(vitorias) || isNaN(derrotas)) {
      console.log('Valores inválidos. Tente novamente.\n');
      continue;
    }

    const { saldo, nivel } = calcularRankeadas(vitorias, derrotas);
    console.log(
      `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}\n`
    );

    const continuar = prompt('Deseja calcular novamente? (s/N): ').toLowerCase();
    if (continuar !== 's') {
      console.log('Até a próxima!');
      break;
    }
  }
}

// Descomente a linha abaixo caso deseje executar diretamente este arquivo
// mainRankeadas();

// ======================================================
// hero.js - Desafio 3️⃣: Escrevendo as classes de um Jogo
// ======================================================
/**
 * Classe Heroi - Representa um personagem de aventura.
 * Propriedades:
 *  - nome: string
 *  - idade: number
 *  - tipo: 'guerreiro' | 'mago' | 'monge' | 'ninja'
 *
 * Métodos:
 *  - atacar(): imprime ataque específico conforme tipo
 *
 * Uso:
 *   node hero.js (ou execute exemploHerois() abaixo)
 */

class Heroi {
  /**
   * @param {string} nome
   * @param {number} idade
   * @param {'guerreiro'|'mago'|'monge'|'ninja'} tipo
   */
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    const ataques = {
      mago: 'usou magia',
      guerreiro: 'usou espada',
      monge: 'usou artes marciais',
      ninja: 'usou shuriken',
    };

    const ataque = ataques[this.tipo] || 'atacou de forma desconhecida';
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// ----------------- Demonstração -----------------
function exemploHerois() {
  const herois = [
    new Heroi('Merlin', 150, 'mago'),
    new Heroi('Arthas', 30, 'guerreiro'),
    new Heroi('Shaolin', 40, 'monge'),
    new Heroi('Hanzo', 25, 'ninja'),
  ];

  console.log('\n=== Demonstração dos heróis atacando ===');
  herois.forEach((heroi) => heroi.atacar());
}

// Chame a demonstração automaticamente se este arquivo for executado diretamente
if (require.main === module) {
  exemploHerois();
}

module.exports = { Heroi, exemploHerois };
