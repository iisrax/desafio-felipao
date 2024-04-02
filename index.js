console.log("# Desafio Classificador de nível de Herói #")

let heroi = "Cal Kestis"
let xpDoHeroi = 0
let nivelH = "Ascendente"

while(xpDoHeroi <= 8987){xpDoHeroi++}
console.log("O Herói está com " + xpDoHeroi + " de XP no momento;")

switch(nivelH)
{case "Ferro":
console.log("- Se XP for menor do que 1.000 = Ferro;")
break;

case "Bronze":
console.log("- Se XP for entre 1.001 e 2.000 = Bronze;")
break;

case "Prata":
console.log("- Se XP for entre 2.001 e 5.000 = Prata;")
break;

case "Ouro":
console.log("- Se XP for entre 5.001 e 7.000 = Ouro;")
break;

case "Platina":
console.log("- Se XP for entre 7.001 e 8.000 = Platina;")
break;

case "Ascendente":
console.log("- Se XP for entre 8.001 e 9.000 = Ascendente;")
break;

case "Imortal":
console.log("- Se XP for entre 9.001 e 10.000= Imortal;")
break;

case "Radiante":
console.log("- Se XP for maior ou igual a 10.001 = Radiante;")
break;}

console.log("_ O Herói de nome " + heroi + " está no nível de " + nivelH + " *o* _")