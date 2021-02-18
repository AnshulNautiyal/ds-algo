const swap = (array, i ,j) => ([array[j],array[i]] = [array[i], array[j]]);
const BubbleSort = (array) => {
    const arrayLen = array.length;
    var noSwap;
    for(let i = arrayLen - 1; i > 0; i--) {
        noSwap = true;
        for(let j = 0; j <  i - 1; j++) {
            console.log(array, array[j], array[j+1])
            if(array[j] > array[j+1]){
                swap(array,j,j+1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return array;
}

// console.log(BubbleSort([8,1,2,3,4,5,6,7]));
console.log(BubbleSort([9,6,7,4,7,3,67,23,55]));

// worst case: O(n2)
// Best Case: O(n) when we sue noSwap logic and you data is nearly sorted

//  In bubble sort you keep putting larger elements at the end of array in every loop
