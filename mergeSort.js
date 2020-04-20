function mergeSort(arr) {
    var len = arr.length
    if (len < 2) {
        return arr
    }
    var minIndex = Math.floor(len / 2)
    var left = arr.slice(0, minIndex)
    var right = arr.slice(minIndex)
    return merge(mergeSort(left), mergeSort(right))

}


function merge(left, right) {
    var result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }

    while (left.length > 0) {
        result.push(left.shift())
    }

    while (right.length > 0) {
        result.push(right.shift())
    }

    return result
}

var arr=[3,44,38,5,47,2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var beginTime = new Date();
console.log(mergeSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var endTime = new Date();

console.log("排序用时共计"+(endTime-beginTime)+"ms");