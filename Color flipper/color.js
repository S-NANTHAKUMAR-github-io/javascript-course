const btn = document.getElementById("btn")
const colortext = document.getElementById("colortext")
const wrap = document.getElementById("wrap")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D','E', 'F']


btn.addEventListener('click',function (){
    let hexColor = '#'
    for(let i=0; i<=5; i++){
        hexColor = hexColor + randHexValues()
    }
    console.log(hexColor);
    wrap.style.backgroundColor = hexColor;
    colortext.innerHTML = hexColor
})

function randHexValues(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}