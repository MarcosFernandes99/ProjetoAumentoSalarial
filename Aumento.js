
PerguntarDados();

if(salario <= 1500){
    percentual = 20/100
    console.log(percentual)
}
else if(salario <= 2000){
    percentual = 15/100
    console.log(percentual)
}
else if(salario <= 3000){
    percentual = 10/100
    console.log(percentual)
}
else{
    percentual = 5/100
    console.log(percentual)
}

CalcularAumento(salario, percentual);
console.log(`Salário com aumento ${aumento}`)

ExibirDados();

function ExibirDados(){
    console.log(`Nome: ${nome}, Salário: R$${salario}, Percentual de aumento: %${percentual * 100}, Salário ajustado: R$${aumento}`)
}


function CalcularAumento(num1, num2){
    return aumento = num1 + (num1*num2) 
}

function PerguntarDados(){
    nome = prompt(`Qual o seu nome`)
    salario = parseFloat(prompt(`Qual o seu salário`)) 
    console.log(nome)   
    console.log(salario)
}