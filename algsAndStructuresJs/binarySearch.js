// ===== binary search ==================================== O(log2n)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let count = 0

function binarySearch(array, item) {
    let start = 0 // позиция первого элемента
    let end = array.length // позиция последнего (по длине массива)
    let middle // позиция среднего (вычисляется в цикле)
    let found = false // флаг отображает найден элемент или нет
    let position = -1 // позиция самого элемента, возвращается из функции, если элемент не найден - возвращается -1
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2) // поиск среднего значения (Math.floor - округляет число до нижней границы)
        if (array[middle] === item) { // если элемент в массиве по индексу, который высчитали равен элементу, который ищем, то
            found = true // флаг в true
            position = middle // число найдено и присваивается к position
            return position // цикл остановится, т.к. цикл крутиться пока found = false
        }
        if (item < array[middle]) { // если искомый элемент меньше, чем элемент в середине, то интересует первая половина массива
            end = middle - 1 // то от конца нового половинного массива отнимается последний индекс тк отрезается правая часть
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 13));
console.log('count = ', count);


// ===

let arr = [-444, -32, -1, 1, 3, 4, 5, 6, 8, 10, 13, 15, 19, 21, 22, 26, 31]
let count1 = 0

let biSearch = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid

    while (left <= right) {
        count1 += 1
        mid = Math.round((right + left) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(biSearch(arr, 332))
console.log(count1);

































