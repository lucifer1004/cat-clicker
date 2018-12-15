const catSources = []
catSources.push({'src': 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})
catSources.push({'src': 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})

const countText = (count) => {
  return '<p>' +
    `This cat has been clicked ${count} ${
             count === 1 ? 'time' : 'times'}.` + '</p>';
};

const count = []
const text = []
let index = 0
catSources.forEach(cat => {
  count.push(0)
  const div = document.createElement('div')
  const img = document.createElement('img')
  img.src = cat.src
  img.id = index
  div.appendChild(img)
  document.body.appendChild(div)

  const textDiv = document.createElement('div')
  textDiv.id = index
  textDiv.render = function() {
    this.innerHTML = countText(count[this.id])
  }
  document.body.appendChild(textDiv)
  textDiv.render()
  text.push(textDiv)

  img.addEventListener('click', function() {
    count[this.id]++
    text[this.id].render()
  })

  index++
})