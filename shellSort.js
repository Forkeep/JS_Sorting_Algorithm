function shellSort(arr) {
    var len = arr.length
    for (var step = parseInt(len / 2); step > 0; step = parseInt(step / 2)) {
        for (var i = step; i < len; i++) {
            var currentNum = arr[i]
            for(var j=i-step;j>=0;j-=step){
                if(arr[j]>currentNum){
                    arr[j+step] = arr[j]
                }
                else{
                    break
                }
            }
            arr[j+step] = currentNum
        }
    }
    return arr
}


var arr=[3,44,38,5,47,15]
var beginTime = new Date();
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
var endTime = new Date();

console.log("排序用时共计"+(endTime-beginTime)+"ms");