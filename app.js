let numero = parseInt(Math.random() *10 + 1);
console.log (numero);
alert('Bem vindo ao jogo de adivinhar o número, você terá 3 tentativas!');
for(let tentativa = 1; tentativa < 4; tentativa++){
    let chute = parseInt(prompt('Adivinhe o número entre 1 e 10:'));
    if(chute === numero){
        alert ('Parabéns vc acertou o número!');
        break;
    }else{
        if(chute > numero){
            alert(`Errado! O número é menor que ${chute}`);
        }else if (chute < numero){
            alert(`Errado! O número é maior que ${chute}`);
        }
        let tentativasRestante = 3 - tentativa;
        
        if(tentativasRestante> 0){
            alert(`você ainda tem ${tentativasRestante} tentativas`);
        }else{
            alert(`Suas tentativas acabaram. O número correto era ${numero}.`);
        }
    }
}
