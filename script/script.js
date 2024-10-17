let stick1 = document.getElementById('stick1');
let stick2 = document.getElementById('stick2');
let stick3 = document.getElementById('stick3');
let navSandwich = document.getElementById('nav-sandwich');
let navMobile = document.getElementById('nav-mobile');
let sandwichCounter = 0;

navSandwich.onclick = function(){
    if(sandwichCounter == 0){
        stick1.style.cssText = `margin-top: 10px; transform: rotate(45deg)`;
        stick2.style.cssText = `opacity: 0`;
        stick3.style.cssText = `margin-top: -15px; transform: rotate(-45deg)`;
        navSandwich.style.cssText = `margin-top: -15px;`;
        navMobile.style.cssText = `visibility: visible; opacity: 1; animation: square-in-hesitate 2s;`;
        sandwichCounter = 1;
    }
    else if(sandwichCounter == 1){
        stick1.style.cssText = ``;
        stick2.style.cssText = ``;
        stick3.style.cssText = ``;
        navSandwich.style.cssText = ``;
        navMobile.style.cssText = `animation: square-out-hesitate 2s; visibility: hidden; opacity: 0;`;
        sandwichCounter = 0;
    }
}