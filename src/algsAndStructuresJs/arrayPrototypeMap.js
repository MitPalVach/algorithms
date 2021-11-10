// ===== custom map func ====================================

const array = [20, 19, 5, -3, -5, 11, 15, 6, 44, 32, 10, 7]

Array.prototype.myMap = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result
}

console.log(array.myMap((el)=> {
    return el * 10
}))

// ==========





