// let Nome =Evelyn
// let idade = 18
// let maiorDeIdade = true
// let salto = 1000

// // condicional simples
// if (idade >=18){
//     console.log("Sou maior de idade");
// }
// else{
//     console.log("Sou menor de idade");
// }
// //condicionar composta
// if(saldo < 1000){
//     console.log("Fique em casa");
// }
// else if(saldo >= 1000 && >=5000){
//     console.assert("Sair pra festa")
// }
// else{
//     console.log("guardar dinheiro")
// }
// let userAge = Number (prompt("Digite a sua idade"));
// if(userAge <= 0){
//     console.log("você é uma criança");
//      }
//         else if(userAge>=12 && userAge <18){
//     console.log("voce é uma adolescente")
//         }
//     else if (userAge >=18 && userAge< 60){
//         console .log("Voce e um adulto");
//     }
//     else if(userAge >=60){
//         console.log("voce e um idoso"); --
//     }
//     let height = number (prompt("Digite o seu peso 70.5 kg"))
//     let weight = number (prompt("Digite a sua altura ex 1.75"))

//     let imc =  weight / (height * height) 
//     imc = imc.toFixed(2);

//     if(img < 18.5){
//         alert("Abaixo do peso normal");
//     }
//     else if (imc >=18.5 && imc < 24.9){

//     }
//     else if (imc >= 25 && imc <= 34.9){
//         alert("Peso normal")
//     }
//     else if (imc >= 30 && imc <= 29.9){
//         alert("Excesso de peso")
//     }
//     else if (imc >= 35 && imc <= 39.9){
//         alert("Obesidade classe 2")

//     }
//     else if(imc >=40){
//         alert("Obesidade classe 3")
//     }


//   let opcao = number(prompt("Digite uma opcao de 1 a 3 "));
//   switch (opcao) {
//   case 1:
//   console.log("Domingo ");
//   break;
//   case 2:
//   console.log("Segunda");
//   break;
//   case 3:
//   console.log("Terca");
//   break;
//   default:
//      case 4:
//   console.log("Quarta");
//   break;
//   case 5:
//   console.log("Quinta");
//   break;
//   case 6:
//   console.log("Sexta");
//   break;
//   default: 
//   case 7: 
//   console.log("Sabado")
//   break
//   default:

//   console.log("opcao invalida");
//   break;
//     }
let height = number(prompt("Digite o seu peso 70.5 kg"))
let weight = number(prompt("Digite a sua altura ex 1.75"))

let imc = weight / (height * height)
imc = imc.toFixed(2);


switch (true) {
    case (imc < 18.5):
        classificacao = "Abaixo do peso";
        break;
    case (imc < 24.9):
        classificacao = "Peso normal";
        break;
    case (imc < 29.9):
        console.log();
        break;
    case (imc < 34.9):
        classificacao = "Obesidade Grau 1";
        break;
    case (imc < 39.9):
        classificacao = "Obesidade Grau 2";
        break;
    default:
        classificacao = "Obesidade Grau 3";
        break;
}






