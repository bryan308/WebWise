const tooltips = {
    fb_messenger: "FB Messenger",
    home: "Home of WebWise",
    discord: "Discord",
    signIn: "Sign In",
    signUp: "Sign Up",
    github: "GitHub",
    close: "close",
    fb: "Facebook",
    email: "Email",

    c1_l1_p2: "Internet",
    c1_l1_p3: "Development Lifecycle",
    c1_l1_p4: "Web Development Languages",

    c1_l2_p1: "Computer Basics",
    c1_l2_p2: "Text Editors",

    c1_l3_p1: "Intro to HTML",
    c1_l3_p2: "HTML Boilerplate",
    c1_l3_p3: "HTML for Texts",
    c1_l3_p4: "Lists",
    c1_l3_p5: "Image",
    c1_l3_p6: "Hyperlinks",

    c1_l4_p1: "Intro to CSS",
    c1_l4_p2: "Designing Texts",
    c1_l4_p3: "Fonts",
    c1_l4_p4: "Backgrounds",
    c1_l4_p5: "List Properties",
    c1_l4_p6: "Box Model",
    c1_l4_p7: "Block and Inline",
    soon: "Comming soon!"
};

Object.keys(tooltips).forEach(key => {
    const element = document.querySelectorAll(`[tippy="${key}"]`);
    if (element) {
        tippy(element, {
            content: tooltips[key]
        });
    }
});