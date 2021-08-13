const InsertionSort = (array) => {
    
    const arrayLen = array.length;
    for(let i = 1; i < arrayLen; i++){
        const currentValue = array[i];
        for(j = i - 1; j >=0 && array[j] > currentValue; j--){
            array[j+1] = array[j];
        }
        array[j+1] = currentValue;
    }
    return array;
}

// console.log(InsertionSort([1,2,3,5,4]));
console.log(InsertionSort([6,2,8,22,900,33]));

// Work  case O(n2)
// In Insertion Sort, we keep putting smallest element  in the beginning of array



// console.log(mergeSort([6,3,88,22,93,4,88]))
// console.log(mergeSort([8,6,5,3,2,1,0]))
// console.log(mergeSort([1,2,3,4,6,7]))
// console.log(mergeSort([1,2,3,4,5,6,7,0]))
// console.log(RadixSort([467,343,64545,2,4,0,1234,66,23236,6]));
// console.log(mergeSort(['adb','bcb','b','aba']))