import storage from '../storage';

const KEY = 'display';

/** @typedef {Object.<string, boolean>} DisplayMap **/

export default Object.freeze({

    /**
     * @returns {DisplayMap}
     */
    fetchAll () {
        return storage.get(KEY) || {};
    },

    /**
     * @param displayMap {DisplayMap}
     */
    put (displayMap) {
        storage.set(KEY, displayMap);
    },

    /**
     * @param key {string}
     * @returns {boolean}
     */
    get (key) {
        const data = this.fetchAll()[key];
        if (data === undefined) return false;
        return data;
    },

    /**
     * @param key {string}
     * @param value {boolean}
     * @returns {boolean}
     */
    set (key, value) {
        const displayMap = this.fetchAll();
        displayMap[key] = value;
        this.put(displayMap);
        return displayMap[key];
    },

    /**
     * @param key {string}
     * @returns {boolean}
     */
    toggle (key) {
        const displayMap = this.fetchAll();
        displayMap[key] = !displayMap[key];
        this.put(displayMap);
        return displayMap[key];
    }

})