// ====== linear search ================================ O(n)

const array = [1, 3, 5, 11, 7, 2, 9, 8, 6, 4]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 4))
console.log('count = ', count);



