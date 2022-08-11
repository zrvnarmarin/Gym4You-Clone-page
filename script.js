const cardImageContainer = document.getElementById('card-image')
const card = document.getElementById('card')
const cardAbout = document.getElementById('about')

card.addEventListener('mouseover', () => {
    cardAbout.style.borderLeft = 'none'
    card.style.border = '10px solid red'
    card.style.padding = '0'
    card.style.transition = 'border 0.4s'
})

card.addEventListener('mouseleave', () => {
    cardAbout.style.borderLeft = '1px solid #dbe1e7'
    card.style.border = '0'
})

