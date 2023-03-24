//BEGIN
export const countUniqChars = (message) => {
    let uniq = [],
        i;
    for (i = 0; i != message.length; i++) {
        if (!uniq.includes(message[i])) {
            uniq.push(message[i]);
        }
    }
    return uniq.length;
}
export default countUniqChars;
//END