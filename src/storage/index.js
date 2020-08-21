export default Object.freeze({

    /**
     * 저장소의 아이템을 가져옴
     * @param key {string}
     * @returns {*}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key) || 'null');
    },

    /**
     * 저장소의 아이템을 교체함
     * @param key {string}
     * @param value {*}
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * key에 value를 할당하고, toogle 시킴
     * @param key {string}
     * @param value {string}
     * @param toggle {'t'|'f'}
     */
    toggle(key, value, toggle) {
        if (this.get(key) === null) {
            this.set(key, [value, toggle]);
            return;
        }
        const before = this.get(key).split(',')[0];
        this.set(key, [value, before === 't' ? 'f' : 't']);
    }

});