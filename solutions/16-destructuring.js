//BEGIN
export const getTheNearestLocation = (Array, point = [0, 0]) => {
    if (Array.length == 0) {
        return null;
    }
    let [x0, y0] = point;
    let mindist = Infinity,
        mindistloc;
    for (let el of Array) {
        let [loc, [x, y]] = el;
        let dist = Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2));
        if (dist < mindist) {
            mindist = dist;
            mindistloc = el;
        }
    }
    return mindistloc;
}

export default getTheNearestLocation;
//END