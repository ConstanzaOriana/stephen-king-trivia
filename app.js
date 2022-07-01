/*CONSTRUI ESTA PAGINA PARA HACER FUNCIONAR MEDIANTE JavaScript UNA DINAMICA DE TRIVIA
EN DONDE EL USUARIO JUEGUE A ADIVINAR LAS RESPUESTAS CORRECTAS
Y LUEGO EL SITIO CUENTE LA CANTIDAD DE ACIERTOS 
ARROJANDO MENSAJES DIFERENTES DE ACUERDO AL RESULTADO OBTENIDO.*/


/*Primero debo determinar cuales son las respuestas correctas*/
/*Segundo debo pedirle a JS que sume 1 punto cada vez que el usuario selecciona una correcta*/
/*Tercero debo pedirle a JS que sume todos los puntos obtenidos si el usuario selecciono correctas*/
/*Cuarto debo mostrarle al usuario un mensaje de acuerdo al puntaje obtenido*/

//Tambien tengo que inhabilitar que el usuario seleccione otra opcion
//de la misma pregunta cuando ya selecciono uno

const opciones = document.getElementsByTagName("button");
opciones[0].addEventListener("click", function onClick(){
   console.log("");
});
for (const button of opciones){
    button.addEventListener("click", () => {
        button.style.backgroundImage = "url(https://68.media.tumblr.com/dfb0e7b96e7c09bac72726c9306e5126/tumblr_o2egxy0wQs1rp0vkjo1_500.gif)";
        button.style.backgroundPosition = "center";
        button.style.color = "white";
        button.style.cursor = "none";
        button.style.color = "white";
        button.style.fontSize = "100px";
        button.style.border = "none";
        button.style.display = "flex";
        button.style.justifyContent = "center";
        button.style.alignItems = "center";
        button.style.width = "95%";
        button.style.height = "215px";
        button.style.position = "absolute";  
        button.style.zIndex = "100";
        button.style.padding = "-10%";
        button.style.marginTop= "-6%";
    })
};


let correctas = [];
let rtaCorrecta = document.querySelectorAll(".correct");

function contador(){}
rtaCorrecta.forEach( clickCorrectas =>{
    clickCorrectas.addEventListener("click", ()=>{
        if((contador)){
            correctas.push(1);
            console.log(correctas.length);
            localStorage.setItem("resultado", JSON.stringify(correctas));
            }   
        }
        
    )
});



let resultado = document.getElementById("result");
resultado.addEventListener("click", () => {
    switch(correctas.length) {
        case 1:
            Swal.fire({
                title: '- 1/10 correct answers -',
                text: 'Lots of awesome stories out there, do not give up!',
                imageUrl: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/Maximum-Overdrive-Do-Stephen-King-Right.gif?resize=700%2C298&ssl=1',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 2:
            Swal.fire({
                title: '- 2/10 correct answers -',
                text: 'Do not miss all the stories! Keep reading!',
                imageUrl: 'https://c.tenor.com/KQYF-xmocFEAAAAC/ass-stephen-king.gif',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 3:
            Swal.fire({
                title: '- 3/10 correct answers -',
                text: 'Love horror? Do not stop reading Stephen King!',
                imageUrl: 'https://64.media.tumblr.com/66dd7eb92075f1029df10e3f3966a13f/tumblr_mxmcgnCjy31s39hlao2_r1_500.gifv',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 4:
            Swal.fire({
                title: '- 4/10 correct answers -',
                text: 'Lots to catch up on! Keep reading!',
                imageUrl: 'https://pa1.narvii.com/6492/bb20c8d10575b3336b663103577263bc17616447_hq.gif',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 5:
            Swal.fire({
                title: '- 5/10 correct answers -',
                text: 'Halfway there, keep loving the horror!',
                imageUrl: 'https://pa1.narvii.com/6492/8e0a54f4fc75a01cb71d9b750c48a61a67c6dc4a_hq.gif',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 6:
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'Horror still awaits, keep reading!',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 7:
            Swal.fire({
                title: '- 7/10 correct answers -',
                text: 'Stephen is watching you, keep reading!',
                imageUrl: 'https://c.tenor.com/SpkdVyxTTToAAAAM/yep-stephen-king.gif',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 8:
            Swal.fire({
                title: '- 8/10 correct answers -',
                text: 'You are doing great, do not give up!',
                imageUrl: 'https://www.cinepremiere.com.mx/wp-content/uploads/2020/01/Stephen-King-diversidad-%C3%93scar-2020.gif',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 9:
            Swal.fire({
                title: '- 9/10 correct answers -',
                text: 'Almost there! Keep reading!',
                imageUrl: 'https://c.tenor.com/GgY1Pu035PAAAAAC/steven-king.gif', 
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        case 10:
            Swal.fire({
                title: '- 10/10 correct answers -',
                text: 'Stephen is proud of you! Cheers!',
                imageUrl: 'https://c.tenor.com/QwSKwEyV5FQAAAAC/stephen-king-it.gif',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;
        default:
            Swal.fire({
                title: '- 0/10 correct answers -',
                text: 'Start reading! You wont regret it!',
                imageUrl: 'https://booksrockmyworlddotcom.files.wordpress.com/2017/09/1prl0wp.gif?w=656&zoom=2',
                imageWidth: 400,
                imageHeight: 200,
                color: "white",
                background: "rgb(20, 6, 67)",
                imageAlt: 'Custom image',
              })
            break;    
    };
})





let incorrectas = document.querySelectorAll(".option-button");
incorrectas.forEach( clickIncorrectas =>{
    clickIncorrectas.addEventListener("click", ()=>{
        console.log("incorrecta");        
    })
});




// let correctAnswers = ["Bob", "The Green Mile", "Corgi", "Axe", "237", "Kathy Bates", "Chamberlain", "Church", "Blue", "Avoid nuclear war"];
// }
// let correctOption = document.getElementsByClassName("correct");
// correctOption.addEventListener("click", correctAnswers);

// function correctAnswers(){
//     console.log("Respuesta correcta")
// }

// function correctAnswers(){
// let right = ["Bob", "The Green Mile", "Corgi", "Axe", "237", "Kathy Bates", "Chamberlain", "Church", "Blue", "Avoid nuclear war"];
// console.log(right.includes("Blue"));
// console.log(right.includes("Castle Rock"));  
// }


// /*Segundo debo pedirle a JS que sume 1 punto cada vez que el usuario selecciona una correcta*/

// if((correctAnswers).includes(right)){
//    let number = 0;
// }

// /*Tercero debo pedirle a JS que sume todos los puntos obtenidos si el usuario selecciono correctas*/

// for((number) = 0; (number) <= 10 ; (number) + 1){
//     number = quizResult;
// }

// /*Cuarto debo mostrarle al usuario un mensaje de acuerdo al puntaje obtenido*/

// let quizResult = document.getElementById("result");
// quizResult.addEventListener("click");

// switch(quizResult){
//     case 1:
//         La idea es que no sean alertas las que aparezcan, sino mensajes ubicados en el centro de la pantalla :)
//         alert("You really need to keep reading pal!")
//         break;
//     case 2:
//         alert("You really need to keep reading pal!")
//         break;
//     case 3:
//         alert("You really need to keep reading pal!")
//         break;
//     case 4:
//         alert("Next time don't hesitate on the reading! Keep having a good track!")
//         break;
//     case 5:
//         alert("Halfway there! Stephen is watching you")
//         break;
//     case 6:
//         alert("The number of the devil! Keep reading pal!");
//         break;
//     case 7:
//         alert("Really good mark, but let's keep reading!")
//         break;
//     case 8:
//         alert("You are trying really hard to stop reading; but let's face it: it's difficult!")
//         break;
//     case 9:
//         alert("Almooost there! You are doing great!")
//         break;
//     case 10:
//         alert("Stephen King loves you! Thanks for reading!")
//         break;
//     default:
//         alert("You have cero correct answers! Start reading before it's too late!")
//         break;    
// }


// /*Practicando algoritmo y simulador interactivo*/

// let userName = prompt("Enter your geek name");

// if(userName != null){
//     alert("WELCOME " + userName + "! " + "Before the game starts, let's know your top three favourite Stephen King's books");
//     let userChoice = prompt("Your MOST favourite:");
// while(userChoice != null){
//     newUserChoice1 = prompt("Second favourite?:");
//     newUserChoice2 = prompt("And the final one:");
//     alert("This are your GOAL top three:" + "\n" + userChoice + "\n" + newUserChoice1 + "\n" + newUserChoice2);
//     break;
// }
// } else{
//     alert("Okay, let's get right to it!");
// }


// /*Practicando objeto constructor*/

// class Quiz{
//     constructor(question, option1, option2, option3, answer){
//         this.question = question;
//         this.option1 = option1;
//         this.option2 = option2;
//         this.option3 = option3;
//         this.answer = answer;
//     }
//     resultado(){

//     }
// }

// const one = new Quiz("What's the real name of Pennywise the clown?", "It", "Charlie", "Uncle Clown", "Bob");
// const two = new Quiz("Which story has an immortal mouse?", "The Shawshank Redemption", "Geralt's Game", "Misery", "The Green Mile");
// const three = new Quiz("What type of dog communicates with dead people in Under the Dome?", "Beagle", "Golden Retriever", "Rotwailler", "Corgi");
// const four = new Quiz("What does Annie Wilkes use in Phil's legs in Misery?", "Hammer", "Bat", "Piece of metal", "Axe");
// const five = new Quiz("Which room hosted a dead woman in The Shining?", "19", "256", "34", "237");
// const six = new Quiz("Name the actor/actress that played two mayor caracthers in King's movies", "Tom Hanks", "Jeffrey Demunn", "Melissa McBride", "Kathy Bates");
// const seven = new Quiz("Where did Carrie's story took place?", "Castle Rock", "Bangor", "Derry", "Chamberlain");
// const eight = new Quiz("What's the undead cat's name in Pet Sematary?", "Stacey", "Fluffy", "Doug", "Church");
// const nine = new Quiz("Color of the Mr Mercedes virtual meet-up umbrella logo", "Red", "Yellow", "Purple", "Blue");
// const ten = new Quiz("What's the purpose of Johnny Smith in The Dead Zone?", "His dog resurrection", "Save his wife from cancer", "Become a powerful politician", "Avoid nuclear war");

// console.log(seven.question)


// /*Comenzando a practicar DOM*/

// let nuevaVariable = document.getElementsByClassName("correct")
// if(nuevaVariable = true){
//         console.log("Respuesta correcta");    
// }


// /*Arrays*/

// alert("Besides the following antagonist characters..." + "\n" +
// "·Pennywise" + "\n" + "·Annie Wilkes" + "\n" + "·Margaret White");
// const enemiesArray = ["Pennywise", "Annie Wilkes", "Margaret White"];
// newCharacter = prompt("...name another one you whish never see the daylight ever again:");
// enemiesArray.push(newCharacter)
// console.log(enemiesArray)



/*EJERCICIOS DE PRACTICA DE BOOKLET*/

// let numerito = parseInt(prompt("Ingrese numero del 1 al 4"));
// if(numerito <= 4){
// switch(numerito){
//     case 1:
//         alert("Has escogido a Homero")
//         break;
//     case 2:
//         alert("Has escogido a Marge")
//         break;
//     case 3:
//         alert("Has escogido a Bart")
//         break;
//     case 4:
//         alert("Has escogido a Lisa")
// }
// }else{
//     alert("Numero no valido")
// }

// let tecla = prompt("Presione una tecla");
// if((tecla === "Y") || (tecla === "y")){
//     console.log("Correcto");
// } else{
//     console.log("Error");
// }

// let nombre= prompt("Ingrese su nombre");
// let otroNombre = "Coty"
// if((nombre === otroNombre( || (nombre === "coty")){
//     alert("Yo fui");
// }else{
//     alert("Yo no fui");
// }


//let precio = Number(prompt("Ingrese precio"));
// let operacionUno = 20 * precio;
// let operacionDos = operacionUno / 100;
// let result = precio - operacionDos;
// alert("El precio con descuento queda en " + result);







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


