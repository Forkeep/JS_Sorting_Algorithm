function selectionSort(arr){
    var len = arr.length
    var minIndex=0
    var temp
    for(var i=0;i<len-1;i++){
        minIndex = i
        for(var j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        temp = arr[minIndex] 
        arr[minIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}


var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var beginTime = new Date();
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var endTime = new Date();

