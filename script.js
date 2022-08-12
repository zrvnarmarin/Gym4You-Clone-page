const cards = document.querySelectorAll('.card')
const cardsAbout = document.querySelectorAll('.about')
const cardsAboutDescriptions = document.querySelectorAll('.about .description')

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.border = '10px solid #e31e25'
        card.style.padding = '0'
        card.style.transition = 'border 0.4s'

        cardsAboutDescriptions.forEach(description => {
            description.style.color = 'red'
        })
    })

    card.addEventListener('mouseleave', () => {
        card.style.border = '0'

        cardsAboutDescriptions.forEach(description => {
            description.style.color = '#1f1f24'
            description.style.transition = 'color'
        })
    })
})