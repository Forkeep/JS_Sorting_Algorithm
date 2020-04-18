function bubbleSort(arr){
    var len = arr.length
    for(var i=0;i<len;i++){
        for(var j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
var beginTime = new Date();
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var endTime = new Date();
console.log("排序用时共计"+(endTime-beginTime)+"ms");