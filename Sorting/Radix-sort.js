
const getEachDigit = (number,i) => {
    return Math.floor(Math.abs(number) / Math.pow(10,i)) % 10;
}
const digitCount = (number) => {
    if(number === 0) return 1;
    return Math.floor(Math.log10(number)) + 1;
}

const maxDigitInListOfNumber = (arr = []) => {
    let maxDigit = 0;
    for(let i =0 ;i < arr.length;i++){
        maxDigit = Math.max(maxDigit,digitCount(arr[i]));
    }
    return maxDigit;
}   
const RadixSort = (arr) => {
    let baseBucket = [];
    const getMaxDigitCount = maxDigitInListOfNumber(arr);
    for(let i =0; i< getMaxDigitCount; i++){
        baseBucket.length = 0;
        // Or baseBucket = Array.from({length:10},() => []) then remove line 25
        for(let j =0;j < arr.length;j++){
            const digit = getEachDigit(arr[j],i);
            if(!Array.isArray(baseBucket[digit]))baseBucket[digit] = [];
            baseBucket[digit].push(arr[j]);
        }
        arr.length = 0;
        for(let k =0;k<10; k++){
            if(baseBucket[k]){
                arr.push(...baseBucket[k])
            }
        }
        // Or Instead of above for loop use this ->  arr = [].concat(...baseBucket);
    } //  for loop end
  return arr;
}