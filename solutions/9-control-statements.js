//BEGIN
export const getTotalAmount = (Array, currency) => {
    let sum = 0,
        i;
    for (let el of Array) {
        let thiscurrency = "",
            money = "";
        for (i = 0; el[i] != " "; i++) {
            thiscurrency += el[i];
        }
        if (thiscurrency == currency) {
            for (i = thiscurrency.length + 1; i != el.length; i++) {
                money += el[i];
            }
            sum += Number(money);
        }
    }
    return sum;
}
export default getTotalAmount;
//END