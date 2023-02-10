let contador = 0;
let counter;

let finish = document.getElementById("finish")

function increase() {    
    if (contador < 10) {
        contador ++
        console.log(contador)
    } else {
        alert("Seu tempo acabou! Tente Novamente!")
        clearInterval(counter, 10000)
    } 
}

function start() {
counter = setInterval(increase, 1000); 
}
