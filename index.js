const container = document.getElementsByClassName('container')

const distance = container[1].offsetHeight + container[1].offsetTop

let position = 1
let timer = setInterval(() => {
  position += 2 
  if(position > distance) {
    clearInterval(timer)
  }
  window.scrollTo(0, position)
}, 5)


function show() {
  container[0].classList.add('move')
}

function hidden() {
  container[0].classList.remove('move')
}

window.addEventListener('scroll', function () {
  if (window.scrollY > distance) {
    show()
  } else {
    hidden()
  }
})