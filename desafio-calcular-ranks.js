function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    if (
        typeof vitorias !== "number" || 
        typeof derrotas !== "number" ||
        vitorias < 0 ||
        derrotas < 0
    ) {
        return { erro: "Os valores devem ser apenas números e não podem ser negativos." }; 
    }

    if (vitorias <= 10) return { saldo, nivel: "Ferro" };
    if (vitorias <= 20) return { saldo, nivel: "Bronze" };
    if (vitorias <= 50) return { saldo, nivel: "Prata" };
    if (vitorias <= 80) return { saldo, nivel: "Ouro" };
    if (vitorias <= 90) return { saldo, nivel: "Diamante" };
    if (vitorias <= 100) return { saldo, nivel: "Lendário" };

    return { saldo, nivel: "Imortal" };
}

let vitorias = 100;
let derrotas = 47;

    const resultado = calcularRank(vitorias, derrotas);

if (resultado.erro) {  
    console.log(resultado.erro);   
} else {
    console.log(    
        `\nO herói tem saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}.`
    );
}

console.log("\n_________ TESTANDO DIVERSAS SITUAÇÕES _________\n");

const testes = [ 
    { vitorias: 5, derrotas: 3 },
    { vitorias: 13, derrotas: 7 },
    { vitorias: 46, derrotas: 22 },
    { vitorias: 71, derrotas: 6 },
    { vitorias: 87, derrotas: 10 },
    { vitorias: 102, derrotas: 25 },
    { vitorias: -5, derrotas: 10 }, 
];

testes.forEach(({vitorias, derrotas}, index) => { 
    const resultado = calcularRank(vitorias, derrotas);   

    console.log(`Situação ${index + 1}: Vitórias → ${vitorias}, Derrotas → ${derrotas}`);

    if (resultado.erro) {     
        console.log(`Erro: ${resultado.erro}`); 
    } else {    
        console.log(`O Herói tem um saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}.`);
    }

    console.log("_________________\n"); 
});