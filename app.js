/*CONSTRUI ESTA PAGINA PARA HACER FUNCIONAR MEDIANTE JavaScript UNA DINAMICA DE TRIVIA
EN DONDE EL USUARIO JUEGUE A ADIVINAR LAS RESPUESTAS CORRECTAS
Y LUEGO EL SITIO CUENTE LA CANTIDAD DE ACIERTOS 
ARROJANDO MENSAJES DIFERENTES DE ACUERDO AL RESULTADO OBTENIDO.*/


/*Practicando algoritmo y simulador interactivo*/

let userName = prompt("Enter your geek name");

alert("WELCOME " + userName + "! " + "To start the game, let's know your top three favourite Stephen King's books");

let userChoice = prompt("Your MOST favourite:");

while(userChoice != null){
    newUserChoice1 = prompt("Second favourite?:");
    newUserChoice2 = prompt("And the final one:");
    break;
}

alert("This are your GOAL top three:" + "\n" + userChoice + "\n" + newUserChoice1 + "\n" + newUserChoice2);

/*Practicando objeto constructor*/

class Quiz{
    constructor(question, option1, option2, option3, answer){
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.answer = answer;
    }
    resultado(){

    }
}

const one = new Quiz("What's the real name of Pennywise the clown?", "It", "Charlie", "Uncle Clown", "Bob");
const two = new Quiz("Which story has an immortal mouse?", "The Shawshank Redemption", "Geralt's Game", "Misery", "The Green Mile");
const three = new Quiz("What type of dog communicates with dead people in Under the Dome?", "Beagle", "Golden Retriever", "Rotwailler", "Corgi");
const four = new Quiz("What does Annie Wilkes use in Phil's legs in Misery?", "Hammer", "Bat", "Piece of metal", "Axe");
const five = new Quiz("Which room hosted a dead woman in The Shining?", "19", "256", "34", "237");
const six = new Quiz("Name the actor/actress that played two mayor caracthers in King's movies", "Tom Hanks", "Jeffrey Demunn", "Melissa McBride", "Kathy Bates");
const seven = new Quiz("Where did Carrie's story took place?", "Castle Rock", "Bangor", "Derry", "Chamberlain");
const eight = new Quiz("What's the undead cat's name in Pet Sematary?", "Stacey", "Fluffy", "Doug", "Church");
const nine = new Quiz("Color of the Mr Mercedes virtual meet-up umbrella logo", "Red", "Yellow", "Purple", "Blue");
const ten = new Quiz("What's the purpose of Johnny Smith in The Dead Zone?", "His dog resurrection", "Save his wife from cancer", "Become a powerful politician", "Avoid nuclear war");

console.log(seven.question)



//EJERCICIOS DE PRACTICA EN CLASES

//  function calculadora (primerNum, segundoNum, operacion) {
//     switch(operacion){
//         case "+":
//            return primerNum + segundoNum;
//           break;
//          case "-":
//           return primerNum - segundoNum;
//            break;
//        case "*":
//            return primerNum * segundoNum;
//          break;
//         case "/":
//              primerNum / segundoNum;
//             break;
//        default:
//            "No ha ingresado caracter valido";
//          break;
//      }
//  }

//  let primerNum = Number(prompt("Ingrese primer numero"));
// let segundoNum = Number(prompt("Ingrese segundo num"));
//  let resultado = prompt("Ingrese simbolo de operacion");

// alert("El resultado es" + "\n" + calculadora(primerNum, segundoNum, resultado))

// let ingresarNumero = Number(prompt("Ingrese numero"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * 1;
//     alert(ingresarNumero + "x" + i + "=" + resultado);
// }

// let numero = 0;
// do{
//     numero = prompt("Ingrese num");
//     console.log(numero);
// } while (parseInt(numero));

// let repetir = false; 
// do{
//     console.log("Solo una vez");
// } while(repetir)

/*let userName = prompt("Enter your geek name");

let greetings = alert("Is " + userName + " a book worm and film lover?")*/

/*const number1 = parseInt(prompt("Ingrese un numero"));
const number2 = parseInt(prompt("Ingrese un segundo numero"));

if(number1 > number2){
    alert(number1 + " es el numero mayor");
    } else {
    alert(number2 + " es el mayor numero ");
    }*/

/*const IcecreamPrize = parseInt(5);

const howMany = parseInt(prompt("Ingrese cantidad de helados para comprar"));

const Result = alert("You must pay " + howMany * IcecreamPrize);*/

/*const age = parseInt(prompt("Ingrese su edad"));

const actualYear = parseInt(2022);

alert("You were born in " + actualYear - age);*/

/*let yearOfBirth = parseInt(prompt("Ingrese su anio de nacimiento"));
let actualYear = 2022;
let age = actualYear - yearOfBirth;

if(age > 18){
    let name = prompt("Ingrese su nombre");
    let surname = prompt("Ingrese su apellido"); 
    alert("Hola " + name + " " + surname + " tu edad actual es " + age);
}*/

/*let productCost = Number(prompt("Ingrese el precio de su producto"));

let productPlusIva = productCost * 100;

let finalCost = productPlusIva / 21;

let realFinalCost = finalCost + productCost;

alert("El costo del producto es " + realFinalCost);*/

/*let userLocation = prompt("Ingrese el lugar al que desee viajar");

switch(userLocation){
    case "Colombia" || "colombia":
    alert("Su viaje costara $40")
    break;
    case "Mexico" || "mexico":
    alert("Su viaje costara $50")
    break;
    case "Brasil" || "brasil":
    alert("Su viaje costara $30")
    break;
    case "Uruguay" || "uruguay":
    alert("Su viaje costara $20")
    break;
    default:
    alert("Actualice la pagina e ingrese su destino con la primer letra en mayuscula")
}*/

/*let letter = prompt("Ingrese una letra");

if(letter == "a", "e", "i", "o", "u"){
    alert("Usted ha ingresado una vocal");
} else {
    alert("Usted ha ingresado una consonante");
}*/

/*let userName = prompt("Ingrese su nombre");

let age = parseInt(prompt("Ingrese su edad"));

if (userName == "Gabriel" && age > 24){
    alert("Hola Gabriel, su edad es mayor a 24");
} else if(userName == "Maria" && age > 28){
    alert("Hola Maria, su edad es entre 28 y 35");
} else if(userName == "Maria" && age < 36) {
    alert("Hola Maria, su edad es entre 28 y 35");
  }  else {
    alert("No es usuario");
  }*/


