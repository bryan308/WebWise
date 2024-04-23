document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/js/indexCardData.json')
        .then(response => response.json())
        .then(data => {
            const gridContainer = document.querySelector('#gallery-grid');
            for (let i = 0; i < data.cards.length; i++) {
                let gridItem = document.createElement('a');
                gridItem.setAttribute('href', '');
                gridItem.classList.add(`grid-item${data.cards[i].id}`, 'grid-item', 'hyperlink');
                gridItem.setAttribute('data-location', data.cards[i].dataLocation);
                gridItem.innerHTML = `
                    <div class="grid-item-text">
                        <h4>${data.cards[i].itemTitle}</h4>
                        <span>${data.cards[i].itemSubtitle}</span>
                    </div>
                    <div class="grid-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                `;
                gridContainer.appendChild(gridItem);
            }
        })
        .catch(error => console.log('Error fetching data:', error));
});