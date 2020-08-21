export const hasClass = (element, className) => element.classList.contains(className);
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