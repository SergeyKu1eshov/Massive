//BEGIN
export const buildDefinitionList = (Array) => {
    if (Array.length == 0) {
        return "";
    }
    let str = "<dl>";
    for (let el of Array) {
        str += `<dt>${el[0]}</dt>`;
        str += `<dd>${el[1]}</dd>`;
    }
    str += "</dl>";
    return str;
}
export default buildDefinitionList;
//END