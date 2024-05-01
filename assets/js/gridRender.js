// GRID CARDS RENDERER IN HOME PAGE
const data = {
    cards: [
        {
            id: 1,
            itemTitle: "Internet",
            itemSubtitle:
                "Navigating the Digital Realm: Understanding the Backbone of the Web and the Intricacies of the Internet Connectivity",
            dataLocation: "h_c1_l1_p2",
        },
        {
            id: 2,
            itemTitle: "Development Lifecycle",
            itemSubtitle:
                "From Concept to Creation: Unveiling the Web Development lifecycle and the Key Stages Involved in Bringing Digital Projects to Life.",
            dataLocation: "h_c1_l1_p3",
        },
        {
            id: 3,
            itemTitle: "Computer Basics",
            itemSubtitle:
                "Mastering the Machine: Essential Computer Knowledge for Web Development, Including Hardware, Software, and Operating Systems.",
            dataLocation: "h_c1_l2_p1",
        },
        {
            id: 4,
            itemTitle: "Text Editors",
            itemSubtitle:
                "Unleash the Potential of Text Editors in Crafting, Editing, and Enhancing Your Code with Efficiency and Precision.",
            dataLocation: "h_c1_l2_p2",
        },
        {
            id: 5,
            itemTitle: "HTML Boilerplate",
            itemSubtitle:
                "Building Blocks of the Web: Exploring Essential HTML Elements for Creating Structured and accessible web content.",
            dataLocation: "h_c1_l3_p2",
        },
        {
            id: 6,
            itemTitle: "HTML Lists",
            itemSubtitle:
                "Structuring Information: Harnessing the power of HTML Lists to organize and present content effectively on webpages.",
            dataLocation: "h_c1_l3_p4",
        },
        {
            id: 7,
            itemTitle: "Designing Texts",
            itemSubtitle:
                "Crafting Visual Appeal: Techniques for text design in web development to enhance readability and user engagement.",
            dataLocation: "h_c1_l4_p2",
        },
        {
            id: 8,
            itemTitle: "Lists Properties",
            itemSubtitle:
                "Styling Structures: Manipulating HTML Lists with CSS properties to customize appearance and improve user experience.",
            dataLocation: "h_c1_l4_p4",
        },
        {
            id: 9,
            itemTitle: "Box Model",
            itemSubtitle:
                "Understanding Layout: Delving into the CSS Box Model and how it shpaes the visual structure of webpages.",
            dataLocation: "h_c1_l4_p5",
        },
        {
            id: 10,
            itemTitle: "Block and Inline",
            itemSubtitle:
                "Layout Fundamentals: Distinguishing Between Block and Inline Elements and their impact on webpage layout and design.",
            dataLocation: "h_c1_l4_p6",
        },
    ],
};
document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector("#gallery-grid");
    for (let t = 0; t < data.cards.length; t += 1) {
        let i = document.createElement("a");
        i.setAttribute("href", ""),
            i.classList.add(`grid-item${data.cards[t].id}`, "grid-item", "hyperlink"),
            i.setAttribute("data-location", data.cards[t].dataLocation),
            (i.innerHTML = `\n                    
                <div class="grid-item-text">\n
                    <h4>${data.cards[t].itemTitle}</h4>\n
                    <span>${data.cards[t].itemSubtitle}</span>\n
                </div>\n                    
                <div class="grid-item-icon">\n
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />\n
                    </svg>\n
                </div>\n
            `),
            e.appendChild(i);
    }
});
