const toggleBtn = document.querySelector('.toggle-btn')
const navigation = document.querySelector('.navigation')

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')
})

toggleBtn.addEventListener('click', () => {
  navigation.classList.toggle('active')
})

