//BEGIN
export const calculateAverage = (Array) => {
    if (Array.length == 0) {
        return null;
    }
    let sum = 0;
    for (let el of Array) {
        sum += el;
    }
    return sum / Array.length;
}
export default calculateAverage;
//END