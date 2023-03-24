//BEGIN
export const getSuperSeriesWinner = (matrix) => {
    let game = 0;
    for (let el of matrix) {
        if (el[0] > el[1]) {
            game += 1;
        } else if (el[0] < el[1]) {
            game -= 1;
        }
    }
    if (game == 0) {
        return null;
    }
    return game > 0 ? "canada" : "ussr";
}
export default getSuperSeriesWinner;
//END