const catSources = []
catSources.push({'src': 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})
catSources.push({'src': 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})
catSources.push({'src': 'https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})
catSources.push({'src': 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})

const countText = (count) => {
  return '<p>' +
    `This cat has been clicked ${count} ${
             count === 1 ? 'time' : 'times'}.` + '</p>';
};
const list = document.getElementById('cat-list')
const currentCat = document.getElementById('current-cat')

const count = []
let index = 0
catSources.forEach(cat => {
  count.push(0)

  const li = document.createElement('li')
  li.id = index
  li.innerHTML = 'No.' + (index + 1)
  li.addEventListener('click', function() {
    currentCat.index = this.id
    currentCat.render()
  })
  list.appendChild(li)

  index++
})

currentCat.index = 0
const div = document.createElement('div')
const img = document.createElement('img')
img.render = () => {
  img.src = catSources[currentCat.index].src
}
div.appendChild(img)
currentCat.appendChild(div)

const text = document.createElement('div')
text.render = () => {
  text.innerHTML = countText(count[currentCat.index])
}
currentCat.appendChild(text)

currentCat.render = () => {
  img.render()
  text.render()
}

img.addEventListener('click', function() {
  count[currentCat.index]++
  text.render()
})

currentCat.index = 0
currentCat.render()