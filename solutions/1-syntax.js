//BEGIN
export const getWeekends = (word = "long") => {
    if (word == "long") {
        return ["saturday", "sunday"];
    } else if (word == "short") {
        return ["sat", "sun"];
    } else {
        return;
    }
}
export default getWeekends;
//END