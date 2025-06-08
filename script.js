// Gera um número aleátorio Secreto
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
//Definição do máximo de tentativas
let tentativasRestantes = 10;
//função para sortear após clique no Botão Chutar
function sortear(){
if (tentativasRestantes <= 0) {
    return; // Evita execução se o jogo já acabou
}
//Captura o valor inserido pelo jogador
const valorInformado = document.getElementById('valor').value;
const palpite = parseInt(valorInformado);
//decresce o valor de tentativas conforme o jogador tentar
tentativasRestantes--;
document.getElementById('tentativas').textContent = `Tentativas Restante: ${tentativasRestantes}`;
//Valida se o palpite é válido
if(palpite < 1 || palpite > 100 ) {
    alert("Valor Inválido, Escolha um número de 1 a 100");
    return;
//Compara o palpite com o número secreto e exibe mensagem
}if(palpite === numeroSecreto){
    document.getElementById('resultado').textContent = "Parabéns você acertou!!";
    return;
}else if(palpite < numeroSecreto){
    document.getElementById('resultado').textContent = "O número secreto é maior!! Tente novamente."
}else{
    document.getElementById('resultado').textContent = "O número secreto é menor!! Tente novamente."
}if(tentativasRestantes === 0) {
    document.getElementById("resultado").textContent = `Você perdeu! O número era ${numeroSecreto}`;
}
}