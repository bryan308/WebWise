document.addEventListener('DOMContentLoaded', () => {
    const lessonListContainers = document.querySelectorAll('.lesson-list-container');

    lessonListContainers.forEach((container) => {
        const courseKey = container.getAttribute("course-key");

        fetch(`/assets/js/lessonsData/${courseKey}.json`)
            .then(response => response.json())
            .then(courseData => {
                const lessonLists = container.querySelectorAll('.lesson-list');

                lessonLists.forEach((lessonList) => {
                    const key = lessonList.getAttribute("lesson-key");
                    const lessonListData = courseData.lessonListContainer.find(list => list.id == key);

                    if (lessonListData) {
                        const lessonListItems = lessonListData.lessonListsItems;
                        const lessonListItemsContainer = lessonList.querySelector('.lesson-list-items');

                        lessonListItems.forEach((item) => {
                            const listItem = document.createElement('a');
                            listItem.classList.add('topic-item', 'hyperlink');
                            listItem.setAttribute('href', '');
                            listItem.setAttribute('data-location', item.dataLocation);

                            // /*
                            // if item.itemSubtitle = empty
                            // */ 
                            // let subtitle = '';
                            // if (item.itemSubtitle !== null) {
                            //     subtitle = item.itemSubtitle;
                            // } else {
                            //     subtitle = 'Item Subtitle';
                            // }

                            let lessonStatus = (item.status === true || item.status === "true") ? 'display: block; color: lightgreen;' 
                                            : (item.status === null && item.status === false || item.status === "false") ? 'display: none;' 
                                            : 'display: none;';

                            listItem.innerHTML = `
                                <div class="item-content">
                                    <div class="item-number"><span>${item.id}</span></div>
                                    <div class="item-text">
                                        <p>${item.itemTitle}</p>
                                        <span>${item.itemSubtitle}</span>
                                    </div>
                                </div>
                                <div class="item-status-icon">
                                    <svg style="${lessonStatus}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            `;
                            lessonListItemsContainer.appendChild(listItem);
                        });
                    }
                });
            })
            .catch(error => console.log('Error fetching data:', error));
    });
});
