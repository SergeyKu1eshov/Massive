//BEGIN
export const getMax = (Array) => {
    if (Array.length == 0) {
        return null;
    }
    let [max, ...rest] = Array;
    for (let el of rest) {
        if (el > max) {
            max = el;
        }
    }
    return max;
}
export default getMax;
//END