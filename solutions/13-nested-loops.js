//BEGIN
export const getSameCount = (massive1, massive2) => {
    let otvet = 0,
        byli = [];

    function notincludes(el, massive) {
        for (let element of massive) {
            if (el == element) {
                return false;
            }
        }
        massive.push(el);
        return true;
    }

    for (let el1 of massive1) {
        if (notincludes(el1, byli)) {
            for (let el2 of massive2) {
                if (el1 == el2) {
                    otvet += 1;
                    break;
                }
            }
        }
    }
    return otvet;
}
export default getSameCount;
//END