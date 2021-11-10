const showCard = data => {
    data.forEach(product => {
        cardTemplate.querySelector('h5').textContent = product.title
        cardTemplate.querySelector('p').textContent = product.precio
        cardTemplate.querySelector('img').setAttribute('src', product.image)
        cardTemplate.querySelector('.btn').dataset.id = product.id

        const clone = cardTemplate.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}