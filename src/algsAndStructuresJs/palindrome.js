// ===== palindrome ==================================== строка читается одинаково с начала и с конца (казак)

function palindrome(str) {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}
console.log(palindrome('asa'));

// ==========

function palindrome1(str) {
    str = str.toLowerCase() // приводит к нижнему регистру
    let refactorStr = str.split('') // разбивает строку (по сепаратору внутри скобок)
    refactorStr = refactorStr.reverse() // разворачиваем символы внутри массива
    refactorStr = refactorStr.join('') // склеиваем массив
    return str === refactorStr  // если изначальная строка равна получившейся (развернутой, тогда true иначе false)
}

console.log(palindrome1('sdf'));



