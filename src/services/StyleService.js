import storage from '../storage';

const KEY = 'style';

/** @typedef {Object.<string, number|string>} StyleMap **/

export default Object.freeze({

    /**
     * @returns {StyleMap}
     */
    fetchAll () {
        return storage.get(KEY) || {};
    },

    /**
     * @param key {string}
     * @returns {string|number}
     */
    get (key) {
        const styleMap = this.fetchAll();
        return styleMap[key];
    },

    /**
     * @param value {string|number}
     * @param element {HTMLElement}
     * @param id {string}
     */
    set (value, element, id) {
        const styleMap = this.fetchAll();
        styleMap[id] = value;
        element.value = value;
    },

    /**
     * @param value {string|number}
     * @param element {HTMLElement}
     * @param id {string}
     */
    setHexColor(value, element, id) {
        const len = value.length;
        const first = value[0];
        const newValue = len === 7 && first === "#" ? value :
                         len === 6 && first !== "#" ? `#${value}` :
                         len === 4 && first === "#" ? value.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3') :
                         len === 3 && first !== "#" ? value.replace(/^(.)(.)(.)$/, '#$1$1$2$2$3$3') :
                         null;

        if (newValue === null) return;

        this.set(newValue, element, id);
    }

})