const container = document.getElementById('container')
const heading = document.getElementById('heading')
const btn = document.getElementById('button')

console.log('parent', container.parentNode);
console.log('sibling', container.nextElementSibling);
console.log('sibling prev', heading.previousElementSibling);

const newValue = document.createElement('a');
container.appendChild(newValue);
container.style.margin = '5em'
newValue.textContent = 'Hey you'
newValue.style.textDecoration = 'none'
newValue.style.border = 'solid 2px red'
newValue.style.padding = '10px 70px'

btn.style.background = 'none'
btn.style.border = 'none'
btn.style.backgroundColor = '#AAFF00 '
btn.borderRadius = '5px'
btn.style.color = 'white'
btn.style.cursor = 'pointer'
btn.style.padding = '12px 16px'

btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'red'
    btn.textContent = 'You Clicked Me!'
})

btn.onclick = () => {
    heading.textContent = 'Wassup Niggah!'
}

