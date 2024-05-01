const routes = {
    about: "pages/about/index.html",
    c1: "../courses/c1/index.html",
    c2: "../courses/c2/index.html",
    c1_l1: "../courses/c1/index.html#lesson1",
    c1_l2: "../courses/c1/index.html#lesson2",
    c1_l3: "../courses/c1/index.html#lesson3",
    c1_l4: "../courses/c1/index.html#lesson4",
    c1_l5: "../courses/c1/index.html#lesson5",
    c2_l1: "../courses/c2/index.html#lesson1",
    c2_l2: "../courses/c2/index.html#lesson2",
    c2_l3: "../courses/c2/index.html#lesson3",
    c2_l4: "../courses/c2/index.html#lesson4",
    h_c1_l1_p2: "pages/courses/c1/c1l1/c1l1p2.html",
    h_c1_l1_p3: "pages/courses/c1/c1l1/c1l1p3.html",
    h_c1_l2_p1: "pages/courses/c1/c1l2/c1l2p1.html",
    h_c1_l2_p2: "pages/courses/c1/c1l2/c1l2p2.html",
    h_c1_l3_p2: "pages/courses/c1/c1l3/c1l3p2.html",
    h_c1_l3_p4: "pages/courses/c1/c1l3/c1l3p4.html",
    h_c1_l4_p2: "pages/courses/c1/c1l4/c1l4p2.html",
    h_c1_l4_p4: "pages/courses/c1/c1l4/c1l4p4.html",
    h_c1_l4_p5: "pages/courses/c1/c1l4/c1l4p5.html",
    h_c1_l4_p6: "pages/courses/c1/c1l4/c1l4p6.html",
    c1_l1_p1: "../../../pages/courses/c1/c1l1/c1l1p1.html",
    c1_l1_p2: "../../../pages/courses/c1/c1l1/c1l1p2.html",
    c1_l1_p3: "../../../pages/courses/c1/c1l1/c1l1p3.html",
    c1_l1_p4: "../../../pages/courses/c1/c1l1/c1l1p4.html",
    c1_l1_p5: "../../../pages/courses/c1/c1l1/c1l1p5.html",
    c1_l2_p1: "../../../pages/courses/c1/c1l2/c1l2p1.html",
    c1_l2_p2: "../../../pages/courses/c1/c1l2/c1l2p2.html",
    c1_l2_p3: "../../../pages/courses/c1/c1l2/c1l2p3.html",
    c1_l2_p4: "../../../pages/courses/c1/c1l2/c1l2p4.html",
    c1_l2_p5: "../../../pages/courses/c1/c1l2/c1l2p5.html",
    c1_l3_p1: "../../../pages/courses/c1/c1l3/c1l3p1.html",
    c1_l3_p2: "../../../pages/courses/c1/c1l3/c1l3p2.html",
    c1_l3_p3: "../../../pages/courses/c1/c1l3/c1l3p3.html",
    c1_l3_p4: "../../../pages/courses/c1/c1l3/c1l3p4.html",
    c1_l3_p5: "../../../pages/courses/c1/c1l3/c1l3p5.html",
    c1_l3_p6: "../../../pages/courses/c1/c1l3/c1l3p6.html",
    c1_l3_p7: "../../../pages/courses/c1/c1l3/c1l3p7.html",
    c1_l4_p1: "../../../pages/courses/c1/c1l4/c1l4p1.html",
    c1_l4_p2: "../../../pages/courses/c1/c1l4/c1l4p2.html",
    c1_l4_p3: "../../../pages/courses/c1/c1l4/c1l4p3.html",
    c1_l4_p4: "../../../pages/courses/c1/c1l4/c1l4p4.html",
    c1_l4_p5: "../../../pages/courses/c1/c1l4/c1l4p5.html",
    c1_l4_p6: "../../../pages/courses/c1/c1l4/c1l4p6.html",
};
document.addEventListener("DOMContentLoaded", () => {
    const c = document.querySelectorAll(".hyperlink");
    c.forEach((c) => {
        const l = c.getAttribute("data-location"),
            s = routes[l] || routes[404];
        c.setAttribute("href", s);
    }),
        c.forEach((c) => {
            c.addEventListener("click", async (l) => {
                l.preventDefault();
                try {
                    const l = c.getAttribute("data-location"),
                        s = c.getAttribute("target") || "_self",
                        e = await (async function (c) {
                            return new Promise((l) => {
                                setTimeout(() => {
                                    l(routes[c] || null);
                                }, 750);
                            });
                        })(l);
                    if (!e) throw new Error("Route not found");
                    window.open(e, s);
                } catch (c) {}
            });
        });
});
