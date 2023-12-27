const colors = ["green", "blue", "black", "aquamarine", "purple"]
const button = document.getElementById('button');
const color = document.querySelector('.color');



button.addEventListener('click', () => { 
    const randomNumber = getRandom()
    document.body.style.backgroundColor = colors[randomNumber]
    color.innerHTML = `${colors[randomNumber]}`
})


const getRandom = () => {
    return Math.floor(Math.random()*colors.length)
}