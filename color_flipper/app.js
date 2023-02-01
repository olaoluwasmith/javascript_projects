const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {// Onclick event with an anonymous function
    randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
}) 

// Generating a random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}