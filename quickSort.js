function quickSort(arr) {
    var len = arr.length
    if (len < 2) {
        return arr
    }
    var baseIndex = Math.floor(len/2)
    var baseNum = arr[baseIndex]
    arr.splice(baseIndex,1)
    var left=[]
    var right=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]<baseNum){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(baseNum,quickSort(right))
}

var arr=[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var beginTime = +new Date();
console.log(quickSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var endTime = +new Date();

console.log("排序用时共计"+(endTime-beginTime)+"ms");

