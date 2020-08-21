export default Object.freeze({

    /**
     * 저장소의 아이템을 가져옴
     * @param key {string}
     * @returns {*}
     */
    get (key) {
        return JSON.parse(localStorage.getItem(key) || 'null');
    },

    /**
     * 저장소의 아이템을 교체함
     * @param key {string}
     * @param value {*}
     */
    set (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

});