function produto(x, y) {
    return x.map((valor, i) => valor * y[i]);
}

function quadrado(x) {
    return x.map(valor => valor ** 2);
}

function somatorio(x) {
    return x.reduce((total, valor) => total + valor, 0);
}

function media(x) {
    return somatorio(x) / x.length;
}

function resultados(x, y) {
    const resultado1 = somatorio(x) * somatorio(y) / y.length;
    const resultado2 = somatorio(x) ** 2 / y.length;
    const resultado3 = somatorio(produto(x, y)) - resultado1;
    const resultado4 = resultado3 / (somatorio(quadrado(x)) - resultado2);
    const resultado5 = media(y) - resultado4 * media(x);

    return { b1: resultado4, b0: resultado5 };
}

function regressaoLinear(eixoX, eixoY) {
    const tempX = eixoX.slice(0, eixoY.length);
    const { b1, b0 } = resultados(tempX, eixoY);

    return eixoX.map((val,i) => ({x:val, y: b1 * val + b0}));
}
console.log(regressaoLinear([1, 2, 3, 4, 5, 6, 7], [9, 18, 27, 36]));