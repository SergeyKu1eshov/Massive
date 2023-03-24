//BEGIN
export const get = (array, index, value = null) => {
    if (Number.isInteger(index) && 0 <= index && index < array.length) {
        return array[index];
    } else {
        return value;
    }
}
export default get;
//END