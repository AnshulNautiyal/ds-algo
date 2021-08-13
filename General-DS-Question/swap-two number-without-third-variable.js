

const swap2Variable = (a,b) => {
    console.log(a,b);
    a = a+b;
    b = a-b;
    a = a-b;
    console.log(a,b);
}
swap2Variable(1,2);

const swapArrayElement = (a,i,j) => {
    console.log(a);
    a[i] = a[i]+a[j];
    a[j] = a[i]-a[j];
    a[i] = a[i]-a[j];
    console.log(a);
}
swapArrayElement([1,2,3,4,5],0,1);