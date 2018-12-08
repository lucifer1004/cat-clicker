let count = 0

const countText = () => {
  return '<p>' +
    `This cat has been clicked ${count} ${
             count === 1 ? 'time' : 'times'}.` + '</p>';
};

const render = () => {
  textDiv.render()
}

const div = document.createElement('div')
const img = document.createElement('img')
img.src =
  'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
img.style.width = '100%'
div.appendChild(img)
document.body.appendChild(div)

img.addEventListener('click', () => {
  count++
  render()
})

const textDiv = document.createElement('div')
textDiv.render = () => {
  textDiv.innerHTML = countText()
}
render()
document.body.appendChild(textDiv)