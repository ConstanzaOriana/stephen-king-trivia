let testSection = document.getElementById("test");

let botonGo = document.getElementById("i-dare-button");
    botonGo.addEventListener("click" , () =>
    Swal.fire({
        title: 'You need to be +18 to play!',
        text: "Continue?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, let's play!",
        cancelButtonText: 'Not yet',
    }).then((result) => {
        if(result.isConfirmed){
            testSection.style.display = "flex"
            testSection.style.width = "100%"
            testSection.style.justifyContent = "center"
            testSection.style.flexDirection = "column"
            testSection.style.marginTop = "5%"
        } else{
            Swal.fire("See you soon!")
        }
    })      
)

const opciones = document.getElementsByTagName("button");
opciones[0].addEventListener("click", function onClick(){
});
for (const button of opciones){
    button.addEventListener("click", () => {
        button.style.backgroundColor = "purple";
        button.style.backgroundPosition = "center";
        button.style.color = "white";
        button.style.cursor = "none";
        button.style.color = "white";
        button.style.fontSize = "80px";
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
        addEventListener("resize", () =>{
            document.getElementsByTagName("button");
            if(innerWidth > 900) {
                button.style.width = "100%";
                button.style.height = "100px";
                button.style.display = "flex";
                button.style.justifyContent = "center";
                button.style.marginTop = "-13%";
                button.style.fontSize = "40px";
                button.style.backgroundColor = "yellow";
                document.body.style.fontSize = "large"
            }
        })
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
            localStorage.setItem("progress", JSON.stringify([correctas]));
            let correctasStorage = JSON.parse(localStorage.getItem("progress")) || [];
            for(correctasStorage = 0; correctasStorage <= 10; correctasStorage++){
                let resultado = document.getElementById("result");
                resultado.addEventListener("click", () => {
                        switch(correctas.length) {
                        case 1:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/Maximum-Overdrive-Do-Stephen-King-Right.gif?resize=700%2C298&ssl=1',
                                title: '- 1/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>',
                            })
                            break;
                        case 2:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://c.tenor.com/KQYF-xmocFEAAAAC/ass-stephen-king.gif',
                                title: '- 2/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 3:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://64.media.tumblr.com/66dd7eb92075f1029df10e3f3966a13f/tumblr_mxmcgnCjy31s39hlao2_r1_500.gifv',
                                title: '- 3/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 4:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://pa1.narvii.com/6492/bb20c8d10575b3336b663103577263bc17616447_hq.gi',
                                title: '- 4/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 5:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://pa1.narvii.com/6492/8e0a54f4fc75a01cb71d9b750c48a61a67c6dc4a_hq.gif',
                                title: '- 5/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 6:
                            SSwal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://www.cinepremiere.com.mx/wp-content/uploads/2020/01/Stephen-King-diversidad-%C3%93scar-2020.gif',
                                title: '- 6/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 7:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://c.tenor.com/GgY1Pu035PAAAAAC/steven-king.gif',
                                title: '- 7/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 8:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://c.tenor.com/QwSKwEyV5FQAAAAC/stephen-king-it.gif',
                                title: '- 8/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>',
                            })
                            break;
                        case 9:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://booksrockmyworlddotcom.files.wordpress.com/2017/09/1prl0wp.gif?w=656&zoom=2',
                                title: '- 9/10 correct answers -',
                                text: 'Left a question behind? You can try again! The new score will be added up to your new result!',
                                footer: '<a href="#test">Try again!</a>'
                            })
                            break;
                        case 10:
                            Swal.fire({
                                icon: 'success',
                                background: 'black',
                                imageUrl: 'https://www.cinepremiere.com.mx/wp-content/uploads/2020/01/Stephen-King-diversidad-%C3%93scar-2020.gif',
                                title: '- 10/10 correct answers -',
                                })
                            break;
                            }}
                        )}
                    }
                }
            )
        }
);


