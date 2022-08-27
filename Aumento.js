var continuar = true
while(continuar){
PerguntarDados();

ConferirPercentual();

CalcularAumento(salario, percentual);
console.log(`Salário com aumento -  R$${aumento}`)

ExibirDados();

CalcularNovamente()
}










function PerguntarDados(){
    nome = prompt(`Qual o seu nome`)
    salario = parseFloat(prompt(`Qual o seu salário`)) 
    console.log(`Nome - ${nome}`)   
    console.log(`Salário - R$${salario}`)
}

function ConferirPercentual(){

    if(salario <= 1500){
        percentual = 20/100
    }
    else if(salario <= 2000){
        percentual = 15/100
    }
    else if(salario <= 3000){
        percentual = 10/100
    }
    else{
        percentual = 5/100
    }
}

function CalcularAumento(num1, num2){
    return aumento = num1 + (num1*num2) 
}

function ExibirDados(){
    console.log(`Nome: ${nome}, Salário: R$${salario}, Percentual de aumento: %${percentual * 100}, Salário ajustado: R$${aumento}`)
}

function CalcularNovamente(){
    var opcao = prompt(`Deseja calcular novamente com novas informações? 1 - SIM/ 2 - NÃO`)
    if(opcao != 1){
        continuar = false
}
}