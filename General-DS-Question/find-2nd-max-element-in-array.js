function secondMax(a){
    let max = result = -Infinity;
    for(let i of  a){
        let temp = Number(i);
        if(i > max){
            [result,max] = [max, i];
        }else if(i  < max && i > result){
            result = i;
        }
    }
    return {
        maxElement: max,
        secondMax: result
    };
}
console.log(secondMax([16,4,7,9,2,15,6]));