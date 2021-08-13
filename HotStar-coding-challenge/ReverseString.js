// Input -> 'abcdef%gh'
// Output ->'hgfedc%ba'

const swap = (str,i,j) => [str[i],str[j]] = [str[j],str[i]]
function reverse(str){
    let a = str.split(''),temp;
    for(let i=0, j=str.length-1; i< j; ){
        if(a[j] === '%'){
            j--
        }else if(a[i] === '%'){
          i++;
        }else{
          swap(a,i,j)
            i++;
            j--;
        }
    }
    return a.join('');
}
// console.log('abcdef%gh')
// console.log(reverse('abcdef%gh'))

// console.log('ab%cdefgh')
// console.log(reverse('ab%cdefgh'))

console.log('abc%defgh')
console.log(reverse('abc%defgh'))