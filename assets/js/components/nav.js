const $ = (e) => { return document.querySelector(e); }

document.addEventListener("DOMContentLoaded", () => {
    const toggle = $("#burger");
    const close = $("#close-nav");
    const sidebar = $(".sidebar-wrapper");
    const overlay = $(".overlay");

    toggle.addEventListener("click", (event) => {
        event.preventDefault();
        toggleSidebar();
    });
    close.addEventListener("click", (event) => {
        event.preventDefault();
        hideSidebar();
    });
    overlay.addEventListener("click", (event) => {
        event.preventDefault();
        hideSidebar();
    });

    const sidebarConfig = {
        default: {
            left: "-21rem",
            display: "none",
            opacity: "0",
        },
        active: {
            left: "0rem",
            display: ["block", "flex"],
            opacity: "0.7",
        }
    }

    function hideSidebar() {
        setTimeout(() => {
            sidebar.style.left = `${sidebarConfig.default.left}`;
        }, 250);
        setTimeout(() => {
            overlay.style.display = `${sidebarConfig.default.display}`;
            overlay.style.opacity = `${sidebarConfig.default.opacity}`;
        }, 300);
        close.style.display = `${sidebarConfig.default.display}`;
        close.style.opacity = `${sidebarConfig.default.opacity}`;
    }
    function toggleSidebar() {
        sidebar.style.left = `${sidebarConfig.active.left}`;
        setTimeout(() => {
            close.style.opacity = `${sidebarConfig.active.opacity}`;
            close.style.display = `${sidebarConfig.active.display[1]}`;
        }, 500);
        overlay.style.display = `${sidebarConfig.active.display[0]}`;
        overlay.style.opacity = `${sidebarConfig.active.opacity}`;
    }
});

const md_nav = `    
<div class="md-nav-menu">
    <button class="close-nav" type="button" id="close-nav" title="close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
    <div class="md-logo-container">
        <a class="hyperlink" href="" data-location="home" title="Home of WebWise">
            <!-- <img src="/assets/images/lugu.png" onerror="" alt="WebWise Logo" /> -->
            <svg id="svg-logo" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision">
                <g id="left" transform="translate(.000001 0.000001)">
                    <rect width="17" height="115" rx="8" ry="8"
                        transform="matrix(1.066595 0.803676-.890585 1.181937 102.417258 15.2588)" stroke-width="0" />
                    <rect width="17" height="115" rx="8" ry="8"
                        transform="matrix(1.066566-.803715 0.890628 1.181904 0 148.822253)" stroke-width="0" />
                    <rect width="17" height="132.808061" rx="8" ry="8"
                        transform="matrix(-.510551 0.653475-.500665-.391162 123.802249 148.903328)" stroke-width="0" />
                    <rect width="17" height="115" rx="8" ry="8"
                        transform="matrix(-.510551-.653475 0.578228-.451761 57.307959 203.495336)" stroke-width="0" />
                </g>
                <g id="right" transform="translate(0 0.000001)">
                    <rect width="17" height="115" rx="8" ry="8"
                        transform="matrix(1.066595 0.803676-.890585 1.181937 281.863367 135.15599)" stroke-width="0" />
                    <rect width="17" height="115" rx="8" ry="8"
                        transform="matrix(1.066566-.803715 0.890628 1.181904 179.446109 28.925063)" stroke-width="0" />
                    <g transform="matrix(-.919935 0 0 1 291.529863 0)">
                        <rect width="17" height="132.808061" rx="8" ry="8"
                            transform="matrix(-.510551 0.653475-.500665-.391162 123.802249 148.903328)" stroke-width="0" />
                        <rect width="17" height="115" rx="8" ry="8"
                            transform="matrix(-.510551-.653475 0.578228-.451761 57.307959 203.495336)" stroke-width="0" />
                    </g>
                </g>
                <rect id="middle" width="17" height="115" rx="8" ry="8"
                    transform="matrix(1.279117 0.383901-.550976 1.835793 170.759581 41.342227)" stroke-width="0" />
            </svg>
            <span class="md-logo-name">WebWise</span>
        </a>
    </div>
    <div class="md-nav-links">
        <a class="md-nav-link hyperlink" href="" data-location="home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg> Home </a>
        <a class="md-nav-link hyperlink" href="" data-location="courses_page">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg> Courses </a>
        <a class="md-nav-link hyperlink" href="" data-location="about">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> About </a>
        <a class="md-nav-link hyperlink" href="" data-location="contact">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact </a>
        <hr />
        <a class="md-nav-link hyperlink" href="" data-location="sign_up">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg> Get Started </a>
        <!-- <a class="md-nav-link hyperlink" href="" data-location="settings">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
        </a> -->
        <a class="md-nav-link hyperlink" href="" data-location="sign_in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg> Sign in 
        </a>
    </div>
</div>
<div class="overlay"></div>
`;

const navbar_component = `
<div class="nav-container">
    <a class="logo-container hyperlink" href="" data-location="home" title="Home of WebWise">
        <!-- <img src="/assets/images/lugu.png" alt="Logo" /> -->
        <svg id="svg-logo" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision">
            <g id="left" transform="translate(.000001 0.000001)">
                <rect width="17" height="115" rx="8" ry="8"
                    transform="matrix(1.066595 0.803676-.890585 1.181937 102.417258 15.2588)" stroke-width="0" />
                <rect width="17" height="115" rx="8" ry="8"
                    transform="matrix(1.066566-.803715 0.890628 1.181904 0 148.822253)" stroke-width="0" />
                <rect width="17" height="132.808061" rx="8" ry="8"
                    transform="matrix(-.510551 0.653475-.500665-.391162 123.802249 148.903328)" stroke-width="0" />
                <rect width="17" height="115" rx="8" ry="8"
                    transform="matrix(-.510551-.653475 0.578228-.451761 57.307959 203.495336)" stroke-width="0" />
            </g>
            <g id="right" transform="translate(0 0.000001)">
                <rect width="17" height="115" rx="8" ry="8"
                    transform="matrix(1.066595 0.803676-.890585 1.181937 281.863367 135.15599)" stroke-width="0" />
                <rect width="17" height="115" rx="8" ry="8"
                    transform="matrix(1.066566-.803715 0.890628 1.181904 179.446109 28.925063)" stroke-width="0" />
                <g transform="matrix(-.919935 0 0 1 291.529863 0)">
                    <rect width="17" height="132.808061" rx="8" ry="8"
                        transform="matrix(-.510551 0.653475-.500665-.391162 123.802249 148.903328)" stroke-width="0" />
                    <rect width="17" height="115" rx="8" ry="8"
                        transform="matrix(-.510551-.653475 0.578228-.451761 57.307959 203.495336)" stroke-width="0" />
                </g>
            </g>
            <rect id="middle" width="17" height="115" rx="8" ry="8"
                transform="matrix(1.279117 0.383901-.550976 1.835793 170.759581 41.342227)" stroke-width="0" />
        </svg>
        <span class="logo-name">WebWise</span>
    </a>
    <div class="nav-menu">
        <div class="nav-links">
            <a class="nav-link hyperlink" href=""               data-location="home"        > Home </a>
            <a class="nav-link hyperlink" href=""               data-location="courses_page"> Courses </a>
            <a class="nav-link hyperlink" href=""               data-location="about"       > About </a>
            <a class="nav-link hyperlink" href=""               data-location="contact"            > Contact</a>
            <a class="nav-link hyperlink" href=""               data-location="sign_in"     > Sign in </a>
        </div>
    </div>
    <a class="nav-btn hyperlink" href="" data-location="sign_up"> Get Started </a>
    <button type="button" class="burger" id="burger" title="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
    </button>
</div>
`;

$('.sidebar-wrapper').innerHTML = md_nav;
$('.navbar').innerHTML = navbar_component;
