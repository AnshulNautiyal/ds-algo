const Merge2SortedArray = (arr1, arr2) => {
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let i = j = 0, finalArr = [];
    while(i < arr1Len && j < arr2Len){
        if(arr1[i] < arr2[j]){
            finalArr.push(arr1[i]);
            i++;
        }else {
            finalArr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1Len){
         finalArr.push(arr1[i]);
            i++;
    }
     while(j<arr2Len){
         finalArr.push(arr2[j]);
            j++;
    }
    return finalArr;
}

// console.log(Merge2SortedArray([1,2,100,123,666],[11,12,56,88]));

const MergeSorting = (array = []) => {
    if(array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    let leftArray = MergeSorting(array.slice(0,mid))
    let rightArray = MergeSorting(array.slice(mid))

    return Merge2SortedArray(leftArray,rightArray);

}

// console.log(MergeSorting([4,3,2,1,5,600,7,8]))
console.log(MergeSorting([1, 2, 3, 0, 0,0, 2, 5, 6]))