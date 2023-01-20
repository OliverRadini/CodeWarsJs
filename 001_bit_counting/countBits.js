
function countBits(n) {
    const asBinary = n.toString(2);

    let count = 0;
    for (let i = 0; i < asBinary.length; i++) {
        count += Number(asBinary[i]);
    }
    return count;
}

countBits(4);

module.exports = {
    countBits
};