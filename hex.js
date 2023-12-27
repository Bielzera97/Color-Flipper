const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.getElementById('button');
const color = document.querySelector('.color')

button.addEventListener('click', () => {
    let hexcolor = '#';
    for(let i=0 ; i<6; i++){
        hexcolor += hex[getRandom()] 
    }
    color.innerHTML = hexcolor;
    document.body.style.backgroundColor = hexcolor
})

const getRandom = () => {
    return Math.floor(Math.random()*hex.length)
}

