let main = document.getElementById('main-container');
let btn = document.querySelector('button');
let input = document.querySelector('input');
let ramdomNum = Math.floor(Math.random() * 100);
console.log(ramdomNum);
let prargraph = document.querySelector('p')

btn.addEventListener('click', () => {
    if (input.value == ramdomNum) {
        prargraph.innerHTML = "Congrualation your Answer is Correct !!"
        prargraph.style.color = 'yellow' 
    }else if(!input.value){
        prargraph.innerHTML = "Enter the Number !!"
        prargraph.style.color = 'red' 
    }
    else if (input.value < ramdomNum) {
        prargraph.innerHTML = "plz chose high number" 
        prargraph.style.color = 'chartreuse' 
    } else if (input.value > ramdomNum) {
        prargraph.innerHTML = "plz chose lower number"
        prargraph.style.color = 'chartreuse' 
    }
})