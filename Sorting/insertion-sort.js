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

console.log(InsertionSort([1,2,3,5,4]));
// console.log(InsertionSort([6,2,8,22,900,33]));

// Work  case O(n2)