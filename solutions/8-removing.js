//BEGIN
export const getSameParity = (Array) => {
    let newarr = [];
    let parityfirst = Math.abs(Array[0]) % 2;
    for (let el of Array) {
        if (Math.abs(el) % 2 == parityfirst) {
            newarr.push(el);
        }
    }
    return newarr;
}
export default getSameParity;
//END