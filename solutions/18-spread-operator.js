//BEGIN
export const flatten = (array) => {
    let newarr = [];
    for (let el of array) {
        if (Array.isArray(el))
            newarr.push(...el);
        else
            newarr.push(el);
    }
    return newarr;
}
export default flatten;
//END