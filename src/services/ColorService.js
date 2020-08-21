import storage from '../storage';

export default Object.freeze({

    setColor(value, element, id) {
        element.value = value;
        storage.set('color', value);
        storage.toggle(id, value, 't');
    },

    getColor () {
        return storage.get('color');
    },

    setHexColor(value, element, id) {
        const len = value.length;
        const first = value[0];
        const newValue = len === 7 && first === "#" ? value :
                         len === 6 && first !== "#" ? `#${value}` :
                         len === 4 && first === "#" ? value.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3') :
                         len === 3 && first !== "#" ? value.replace(/^(.)(.)(.)$/, '#$1$1$2$2$3$3') :
                         null;

        if (newValue === null) return;

        this.setColor(newValue, element, id);
    }

})