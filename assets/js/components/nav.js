const $ = (e) => document.querySelector(e);
document.addEventListener("DOMContentLoaded", () => {
    const e = $("#burger"),
        t = $("#close-nav"),
        l = $(".sidebar-wrapper"),
        a = $(".overlay");
    e.addEventListener("click", (e) => {
        e.preventDefault(),
            (l.style.left = `${s.left}`),
            setTimeout(() => {
                (t.style.opacity = `${s.opacity}`), (t.style.display = `${s.display[1]}`);
            }, 500),
            (a.style.display = `${s.display[0]}`),
            (a.style.opacity = `${s.opacity}`);
    }),
        t.addEventListener("click", (e) => {
            e.preventDefault(), y();
        }),
        a.addEventListener("click", (e) => {
            e.preventDefault(), y();
        });
    const i = { left: "-21rem", display: "none", opacity: "0" },
        s = { left: "0rem", display: ["block", "flex"], opacity: "0.7" };
    function y() {
        setTimeout(() => {
            l.style.left = `${i.left}`;
        }, 250),
            setTimeout(() => {
                (a.style.display = `${i.display}`), (a.style.opacity = `${i.opacity}`);
            }, 300),
            (t.style.display = `${i.display}`),
            (t.style.opacity = `${i.opacity}`);
    }
});
