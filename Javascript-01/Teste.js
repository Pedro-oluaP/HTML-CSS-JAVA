// Atividade-01
alert("Não sei mais mecher no VScode!")


// Atividade-02
let numero = prompt("Digite um número:");
alert("O número informado foi: " + numero);


// Atividade-03
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");
let soma = Number(numero1) + Number(numero2);
alert("A soma dos números informados é: " + soma);


// Atividade-04
let nota1 = prompt("Digite a primeira nota bimestral:");
let nota2 = prompt("Digite a segunda nota bimestral:");
let nota3 = prompt("Digite a terceira nota bimestral:");
let nota4 = prompt("Digite a quarta nota bimestral:");
let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
alert("A média das notas bimestrais é: " + media);


// Atividade-05
let metros = prompt("Digite a medida em metros:");
let centimetros = Number(metros) * 100;
alert("A medida em centímetros é: " + centimetros);



// Atividade-06
let raio = prompt("Digite o raio de um círculo:");
let àrea = Math.PI * Math.pow(Number(raio), 2);
alert("A área do círculo é: " + àrea);



// Atividade-07
let lado = prompt("Digite o lado de um quadrado:");
let area = Math.pow(Number(lado), 2);
let dobroArea = area * 2;
alert("O dobro da área do quadrado é: " + dobroArea);



// Atividade-08
let valorHora = prompt("Digite quanto você ganha por hora:");
let horasTrabalhadas = prompt("Digite o número de horas trabalhadas no mês:");
let salario = Number(valorHora) * Number(horasTrabalhadas);
alert("O total do seu salário neste mês é: " + salario);


// Atividade-09
let fàhrenheit = prompt("Digite a temperatura em graus Fahrenheit:");
let cèlsius = 5 * ((fàhrenheit - 32) / 9);
alert("A temperatura em graus Celsius é: " + cèlsius);


// Atividade-10
let celsius = prompt("Digite a temperatura em graus Celsius:");
let fahrenheit = Number(celsius) * 9/5 + 32;
alert("A temperatura em graus Fahrenheit é: " + fahrenheit);
