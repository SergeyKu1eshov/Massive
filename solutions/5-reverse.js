//BEGIN
export const reverse = (Array) => {
    let i, len = Array.length - 1;
    let len_h = len / 2;
    let b;
    for (i = 0; i <= len_h; i++) {
        b = Array[i];
        Array[i] = Array[len - i];
        Array[len - i] = b;
    }
    return Array;
}
export default reverse;
//END