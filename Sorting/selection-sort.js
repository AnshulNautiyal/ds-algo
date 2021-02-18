const swap = (array,i,j) => ([array[j],array[i]] = [array[i], array[j]]);
let c = 0;
const SelectionSort = (array) => {
    
    let  arrayLen = array.length, minIndex;
    if(!arrayLen) return 'Array is empty.';

    for(let i = 0; i < arrayLen; i++){
        minIndex = i;
        for(let j = i+1; j< arrayLen; j++){
            if(array[minIndex] > array[j]){
                minIndex = j;
            }
        }
        if(i !== minIndex )swap(array,i,minIndex);
        
    }
    return array;
}
// console.log(SelectionSort([54,4,5,2,6,1]))
console.log(SelectionSort([1,2,3,4,5,0]))

// O(n2)
// Selection is better than bubble in only that situation where you swap less compare to swap in bubble