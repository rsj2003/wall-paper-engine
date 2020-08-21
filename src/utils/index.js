export function hexcor(c, r, l) {
    if (c.length === 7 && c[0] === "#") {
        sethexcor(c, r, l)
    } else if (c.length === 6 && c[0] != "#") {
        c = "#" + c
        sethexcor(c, r, l)
    } else if (c.length === 4 && c[0] === "#") {
        const hex = ["#", c[1], c[1], c[2], c[2], c[3], c[3]]
        c = hex.join("")
        sethexcor(c, r, l)
    } else if (c.length === 3 && c[0] != "#") {
        const hex = ["#", c[0], c[0], c[1], c[1], c[2], c[2]]
        c = hex.join("")
        sethexcor(c, r, l)
    }
}

export function sethexcor(c, r, l) {
    r.value = c
    hexcl = c
    localStorage.setItem(l, [c, localStorage.getItem(l) === null ? "t" : localStorage.getItem(l).substr(-2, 2) === ",t" || ",f" ? localStorage.getItem(l).substr(-1, 1) : "t"])
}

export const hasClass = (element, className) => element.classList.contains(className);
export const idSel = id => document.getElementById(id);
export const querySel = query => document.querySelector(query);
export const querySelAll = query => document.querySelectorAll(query);

export function idx(el) {
    let i = 0, temp = el;
    while (temp) {
        i++;
        temp = temp.previousElementSibling;
    }
    return i - 1;
}