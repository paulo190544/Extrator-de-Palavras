const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);


    campoResultado.textContent = palavrasChave.join(", ");
}
function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
 
    letfrequencias = {}
    for (let i of palavras) {
         frequencia[1] =0;
               for(let j of palavras) {
                   if(i==j) {
                       frequencia[i]++;
                }
            }

    return palavras;
}