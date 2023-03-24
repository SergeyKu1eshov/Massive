//BEGIN
export const swap = (array) => {
    let len = array.length;
    let b;
    if (len > 1) {
        b = array[0];
        array[0] = array[len - 1];
        array[len - 1] = b;
    }
    return array;
}
export default swap;
//END