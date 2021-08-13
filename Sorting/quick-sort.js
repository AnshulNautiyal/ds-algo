
const swap = (a,i,j) => [a[i],a[j]] = [a[j],a[i]];
const findPivotIndex = (arr,start,end) => {
    let swapIndex = start;
    let pivotItem = arr[start];
    for(let i = start+1; i< arr.length; i++){
        if(pivotItem > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }
    swap(arr,swapIndex,start);
    return swapIndex;
}
const quickSort = (arr = [], left = 0,right = arr.length - 1) => {

    if(left < right) {

        const pivotIndex = findPivotIndex(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
} 