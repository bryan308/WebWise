/**
 * Adds lines and numbers to the code element by adding a span.line at each newline.
 * Set the starting line number by adding data-line="234" attribute to code element.
 * Disable line numbering by setting data-line="-1"
 * Each span.line has an id so you can easily jump to a specific line using and anchor href like #rb1ln30 (meaning rainbow block 1 line 30)
 * @summary Line numbering for Rainbow.js
 * @version 1.1.2
 * @author Ron Valstar (http://www.sjeiti.com/)
 * @namespace Rainbow.linenumbers
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @requires Rainbow.js
 */
window.Rainbow &&
    !window.Rainbow.linenumbers &&
    (window.Rainbow.linenumbers = (function (e) {
        var n = 0,
            t = document.createElement("style");
        function i(e) {
            n++;
            var t,
                i,
                a,
                d = /\r\n|\r|\n/g,
                l = e.innerHTML.replace(d, "\n").split("\n").length,
                c = e.getAttribute("data-line") << 0 || 1,
                p = c >= 0,
                u = "rb" + n,
                w = e.parentNode,
                s = (function (e) {
                    var n,
                        t = 5,
                        i = document.createElement("div"),
                        o = i.style,
                        a = { font: r(e).font, width: "auto", display: "inline-block" };
                    for (var d in (i.appendChild(document.createTextNode(new Array(1 << t).join("a") + "a")), a))
                        o[d] = a[d];
                    return document.body.appendChild(i), (n = i.offsetWidth >> t), document.body.removeChild(i), n;
                })(e),
                b = 1 + String(c + l - 1).length * s;
            function f() {
                var n, t, i, o;
                (n = a),
                    (t = u),
                    (i = b),
                    (o = e.offsetWidth),
                    (n.textContent =
                        "pre code.rainbow." +
                        t +
                        " .line:before{ width: " +
                        i +
                        "px; }pre code.rainbow." +
                        t +
                        " .line:after{ width:" +
                        (o || 0) +
                        "px }");
            }
            p &&
                ((t = c),
                (i =
                    o(u, c) +
                    e.innerHTML.replace(d, function (e) {
                        return e + o(u, ++t);
                    })),
                e.classList.add(u),
                "block" === r(e).display && window.addEventListener("resize", f, !1),
                (a = document.createElement("style")),
                f(),
                w.parentNode.insertBefore(a, w),
                (e.innerHTML = i));
        }
        function o(e, n) {
            return '<span id="' + (e + "ln" + n) + '" class="line" data-line="' + n + '"></span>';
        }
        function r(e) {
            return (
                e.currentStyle || (document.defaultView && document.defaultView.getComputedStyle(e, null)) || e.style
            );
        }
        return (
            t.appendChild(
                document.createTextNode(
                    "pre code.rainbow .line { position: relative; padding-right: 10px; }pre code.rainbow .line:before{ content: attr(data-line); display: inline-block; text-align: right; white-space: nowrap; }pre code.rainbow .line:after{ content:''; position: absolute; left: 0; bottom: 0; }"
                )
            ),
            document.head.appendChild(t),
            e.onHighlight(i),
            i
        );
    })(window.Rainbow));
