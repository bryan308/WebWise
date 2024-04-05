document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/js/lessonsData/c1.json')
        .then(response => response.json())
        .then(c1_list => {
            const containers = document.querySelectorAll('.lesson-list');

            containers.forEach((lessonListContainer) => {
                const key = lessonListContainer.getAttribute("lesson-key");
                const items = c1_list.lessonListContainer.find(l => l.id == key).lessonListsItems;
                const itemsContainer = lessonListContainer.querySelector('.lesson-list-items');

                items.forEach((item) => {
                    const li = document.createElement('a');
                    li.classList.add('topic-item', 'hyperlink');
                    li.setAttribute('href', '');
                    li.setAttribute('data-location', item.dataLocation);

                    li.innerHTML = `
                            <div class="item-content">
                                <div class="item-number">
                                    <span>${item.id}</span>
                                </div>
                                <div class="item-text">
                                    <p>${item.itemTitle}</p>
                                    <span>${item.itemSubtitle}</span>
                                </div>
                            </div>
                            <div class="item-status-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                    `;
                    itemsContainer.appendChild(li);
                });
            });
        })
        .catch(error => console.log('Error fetching data:', error));
});