const red = document.getElementById("red"); // recupere l'element #red
const orange =  document.getElementById('orange');
const green =  document.getElementById('green');
const button = document.querySelector('button');


function redOff(){
    red.className = "off"; // #red aura sa class = "off"
}
function removeR() {
    red.className = ""; // le rouge s'allume #red aura sa class = ""
    setTimeout(redOff, 2000); // le rouge s'eteind au bout de 2sec (2000)
    }
function redLight(){
    red.className = "";
}

function orangeOff(){
    orange.className = "off";
}
function removeO() {
    orange.className = ""; 
    setTimeout(orangeOff, 2000); 
}


function greenOff(){
    green.className = "off"; 
}
function removeG() {
    green.className = "";
    setTimeout(greenOff, 2000); 
}


function Remove() {
    removeG(); 
    setTimeout(removeO, 2000); 
    setTimeout(removeR, 4000);
}

function boucle() {
    Remove();
    setInterval (Remove, 6000);
}

function myButton(){ 
    if (orange.classList.contains("off") && (red.classList.contains("off"))) {
        greenOff();
        removeO();
        setTimeout(redLight , 2000);
    } else if (green.classList.contains("off") && (red.classList.contains("off")) || (dontRead = !true)) {
        orangeOff();
        removeR();
        setTimeout(removeR, 2000);         
    } else if (green.classList.contains("off") && (orange.classList.contains("off"))) {
        console.log("3eme")
    }
};

button.addEventListener(
    "click", myButton
)
    