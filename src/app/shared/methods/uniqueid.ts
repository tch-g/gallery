export function uniqueId(array: number[]): number {
    let id = 1;
    let arr = array.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr.every((x) => x != id)) {
            return id;
        }
        id++;
        if (id > arr.slice(-1)[0]) {
            return id;
        }
    }
    return id;
}