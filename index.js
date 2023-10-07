const card = document.querySelector('.card')
const icon = document.querySelector('i')

card.addEventListener('dblclick',() => {
    icon.style.transform = 'translate(-50%,-50%) scale(1)'
    icon.style.opacity = '.8'
    setTimeout(() => {
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 2000);
    setTimeout(() => {
        icon.style.opacity = '0'
    }, 1000);
})