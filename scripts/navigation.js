const navigation = document.querySelector('.navigation')
const openButton = document.querySelector('.open')
const closeButton = document.querySelector('.close')

openButton.addEventListener('click', () => {
  navigation.style.transform = 'translateX(0)'
})

closeButton.addEventListener('click', () => {
  navigation.style.transform = 'translateX(400px)'
})
