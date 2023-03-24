//BEGIN
export const calculateSum = (Array) => {
    if (Array.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i != Array.length; i++) {
        if (Array[i] % 3 == 0) {
            sum += Array[i];
        }
    }
    return sum;
};

export default calculateSum;
//END