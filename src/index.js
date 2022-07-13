// You should implement your task here.

module.exports = function towelSort(matrix) {
    const arr = [];
    if (matrix === [] || matrix === undefined) {
        return [];
    } else if (matrix.length === 1) {
        return matrix;
    } else {
        matrix.forEach((element, index) => {
            index % 2 === 0 ? arr.push(element) : arr.push(element.reverse());
        });
        return arr.flat();
    }
};
