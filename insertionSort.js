function insertionSort(arr) {
    var len = arr.length
    for (var i = 1; i < len; i++) {
        var currentNum = arr[i]
        for (var j = i - 1; j >= 0; j--) {
            if(arr[j]>currentNum){
                arr[j+1] = arr[j]
            }
            if(arr[j]<=currentNum){
                break
            }
        }
        arr[j+1] = currentNum

    }
    return arr
}

var arr=[2,1,3,4,5,6,1,8,9,3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var beginTime = new Date();
console.log(insertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var endTime = new Date();
console.log("排序用时共计"+(endTime-beginTime)+"ms");