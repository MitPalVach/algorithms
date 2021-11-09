// ===== selection sort ==================================== O(n*n)

const arr = [1, 0, 4, 7, 5, 11, 3, 17, 3, 22, 0, 3, 13, 20, 19, 5, -3, -5, 11, 15, 6, 44, 32, 10, 7, 12, 2, 13, 5, 1, 9, 8, 18, 4, 16]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i // хранит индекс минимального числа в массиве
        for (let j = i + 1; j < array.length; j++) { // внутренний цикл, где будет находится минимальный элемент и будет заменять элемент из
            // внешнего цикла (внутренний цикл начинает с индекса первого цикла +1, т.е. если элемент заменен, то рассматривать его уже не надо)
            if (array[i] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr));
console.log('array length: ', arr.length);
console.log('count = ', count);