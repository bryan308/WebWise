document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/js/routes.json')
        .then(response => response.json())
        .then(routes => {
            const links = document.querySelectorAll('.hyperlink');

            links.forEach((link) => {
                const route = link.getAttribute("data-location");
                const path = routes[route] || routes[404];
                link.setAttribute("href", path);
            });

            links.forEach((link) => {
                link.addEventListener('click', async (event) => {
                    event.preventDefault();

                    try {
                        const route = link.getAttribute("data-location");
                        const target = link.getAttribute("target") || '_self';
                        const path = await getPath(route);

                        if (path) {
                            window.open(path, target);
                        } else {
                            throw new Error('Route not found');
                        }
                    } catch (error) {
                        console.error('Error navigating:', error.message);
                        window.open(routes[404], '_blank');
                    }
                });
            });

            async function getPath(route) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const path = routes[route] || null;
                        resolve(path);
                    }, 500);
                });
            }
        })
        .catch(error => console.log('Error fetching data:', error));
});