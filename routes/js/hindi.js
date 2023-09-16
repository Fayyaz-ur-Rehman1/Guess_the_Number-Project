let main = document.getElementById('main-container');
let btn = document.querySelector('button');
let input = document.querySelector('input');
let ramdomNum = Math.floor(Math.random() * 100);
console.log(ramdomNum);
let prargraph = document.querySelector('p')

btn.addEventListener('click', () => {
    if (input.value == ramdomNum) {
        prargraph.innerHTML = "बधाई हो आपका उत्तर सही है !!"
        prargraph.style.color = 'yellow'
    } else if (!input.value) {
        prargraph.innerHTML = "नंबर दर्ज करें !!"
        prargraph.style.color = 'red'
    }
    else if (input.value < ramdomNum) {
        prargraph.innerHTML = "कृपया उच्च संख्या चुनें"
        prargraph.style.color = 'chartreuse'
    } else if (input.value > ramdomNum) {
        prargraph.innerHTML = "कृपया कम संख्या चुनें"
        prargraph.style.color = 'chartreuse'
    }
})