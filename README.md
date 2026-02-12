# 🎮  Calculadora de Partidas Ranqueadas

Projeto desenvolvido para o desafio do Bootcamp **"Blip - Lógica de Programação com JavaScript"** da **DIO**.  
O objetivo é calcular o **saldo de ranqueadas** e o **nível** de um jogador com base em suas vitórias e derrotas.

---


## Desafio

O desafio consiste em criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador.  
A função deve calcular o saldo de ranqueadas (**vitórias - derrotas**) e determinar o nível do jogador com base no saldo.


Com isso, o programa deve:

- Calcular o saldo de ranqueadas (**vitórias - derrotas**)
- Determinar o nível do jogador com base na **quantidade de vitórias**
- Exibir uma mensagem final com o saldo e o nível

---

## ✅ Requisitos obrigatórios

Durante a construção do projeto, foi necessário aplicar:

- **Variáveis** — Para armazenar dados  
- **Operadores** — Para cálculos e comparações  
- **Laços de repetição** — Para testar múltiplos casos  
- **Estruturas de decisão** — Para determinar o nível  
- **Funções** — Para organizar a lógica do programa  

---

## 🏅 Regras de classificação por nível

A classificação do jogador é determinada pela quantidade de vitórias:

- 🪨 **Ferro** — Saldo de Ranqueadas < 10  
- 🥉 **Bronze** — 11 ≤  Saldo de Ranqueadas  ≤ 20  
- 🥈 **Prata** — 21 ≤ Saldo de Ranqueadas  ≤ 50  
- 🥇 **Ouro** — 51 ≤  Saldo de Ranqueadas  ≤ 80  
- 💎 **Diamante** — 81 ≤ Saldo de Ranqueadas  ≤ 90  
- 🐉 **Lendário** — 91 ≤ Saldo de Ranqueadas  ≤ 100  
- 🔥 **Imortal** —  Saldo de Ranqueadas  ≥ 101  

---

## 🧠 Como a solução funciona

### 📌 Função principal: `calcularRank(vitorias, derrotas)`

A função:

1. Calcula o saldo
2. Valida se os valores são números, não negativos, e não strings)
3. Retorna um objeto com:
   - `saldo`
   - `nivel`
   - ou uma mensagem de erro


---
## 🖥️ Saída esperada

O desafio pede que ao final seja exibida a mensagem:

"O Herói tem saldo de {saldoVitorias} está no nível de {nivel}"


---


## 🧪 Testes realizados (diversas situações)

Além do exemplo principal, o projeto também testa várias situações automaticamente.
Para isso, foi criado um array com diferentes cenários, passando por: 

- níveis mais baixos (Ferro / Bronze)

- níveis intermediários (Prata / Ouro)

- níveis mais altos (Diamante / Lendário / Imortal)

- e um caso inválido (vitórias negativas) para garantir que o código trata erros corretamente

- Os testes são executados usando forEach, exibindo no console o resultado de cada situação.


---


## 📚 O que esse projeto acrescentou pra mim (como uma dev iniciante)


Esse desafio foi muito útil pra praticar conceitos que fazem bastante diferença na base: 

- entender melhor como funções organizam a lógica do programa na prática

- praticar estruturas condicionais com if, de forma mais real

- aplicar operadores matemáticos para resolver um problema simples

- usar arrays e repetição para automatizar testes

- aprender que validar entrada (ex: números negativos e letras) evita problemas e deixa o código mais completo

- treinar a forma de retornar resultados usando objetos ({ saldo, nivel })


