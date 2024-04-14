document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/js/routes.json')
        .then(response => response.json())
        .then(routes => {
            const links = document.querySelectorAll('.hyperlink');
            const linksWithSpace = ["c1_l1", "c1_l2", "c1_l3", "c1_l4"];

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

                            // if (linksWithSpace.includes(route)) {
                            //     alert(linksWithSpace.includes(route));
                            //     window.scroll({
                            //         top: "1000",
                            //         behavior: 'smooth'
                            //     });
                            // }
                        } else {
                            throw new Error('Route not found');
                        }
                    } catch (error) {
                        window.open(routes[404], '_self');
                        console.error('Error navigating:', error.message);
                    }
                });
            });

            async function getPath(route) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const path = routes[route] || null;
                        resolve(path);
                    }, 750);
                });
            }
        })
        .catch(error => console.log('Error fetching data:', error));
});