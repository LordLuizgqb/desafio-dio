function filtraPares(arr) {
    return arr.filter (callBack)
}

function callBack(item) {
    return item % 2 !== 0;
}

const nums = [2, 4, 3, 45, 36, 47, 29, 73, 456]

console.log(filtraPares(nums))

console.log(nums)