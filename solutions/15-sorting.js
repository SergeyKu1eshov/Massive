//BEGIN
export const bubbleSort = (Array) => {
    let i, j, b;
    for (i = 0; i != Array.length; i++) {
        for (j = 0; j != Array.length; j++) {
            if (Array[i] < Array[j]) {
                b = Array[i];
                Array[i] = Array[j];
                Array[j] = b;
            }
        }
    }
    return Array;
}
export default bubbleSort;
//END