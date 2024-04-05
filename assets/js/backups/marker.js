document.addEventListener('DOMContentLoaded', () => {
    const completeButtons = document.querySelectorAll('.marker');

    completeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const part = button.getAttribute("data-lesson");
            const key = `${part}`;

            fetch('/assets/js/lessonsData/c1.json')
                .then(response => response.json())
                .then(c1data => {
                    const lessonItem = c1data.lessonListContainer
                        .flatMap(container => container.lessonListsItems)
                        .find(item => item.dataLocation === key);

                    if (lessonItem) {
                        // lessonItem.status = !lessonItem.status;
                        lessonItem.status = true;
                        localStorage.setItem('c1_lessons', JSON.stringify(c1data));

                        // if (lessonItem.status) {
                        button.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> Comleted! 
                            `;
                        button.classList.add('completed');
                        // } else {
                        // button.innerHTML = `
                        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        // <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        // </svg> Mark as Complete 
                        // `;
                        // button.classList.remove('completed');
                        // }
                    } else {
                        console.error('Lesson item not found.');
                    }
                })
                .catch(error => console.error('Error fetching or updating data:', error));
        });
    });
});
