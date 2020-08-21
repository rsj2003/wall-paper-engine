import storage from '../storage';



export default Object.freeze({

    getFlask (key, defaultValue){
        const data = storage.get(key);
        if (data === null) {
            return defaultValue;
        }
        const [value, toggle] = data.split(',');
        return toggle === 't' ? value : data;
    },

})