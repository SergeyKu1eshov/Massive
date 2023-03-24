//BEGIN
export const makeCensored = (message, stopwords) => {
    let words = [],
        i,
        word = "";
    for (i = 0; i != message.length; i++) {
        if (message[i] == " ") {
            if (stopwords.includes(word)) {
                words.push("$#%!");
            } else {
                words.push(word);
            }
            word = "";
        } else {
            word += message[i];
        }
    }
    if (stopwords.includes(word)) {
        words.push("$#%!");
    } else {
        words.push(word);
    }
    let str = "";
    for (let el of words) {
        str += " " + el;
    }
    return str.slice(1);
}
export default makeCensored;
//END