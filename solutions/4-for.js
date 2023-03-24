//BEGIN
export const addPrefix = (massive, prefix) => {
    let newMassive = [];
    let i;
    for (i = 0; i != massive.length; i++) { newMassive.push(`${prefix} ${massive[i]}`); }
    return newMassive;
}
export default addPrefix;
//END