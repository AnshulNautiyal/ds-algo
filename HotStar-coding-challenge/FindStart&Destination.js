
let obj = [
   
    {
        start:"DEH",
        dest:"KOL"
    },
    {
        start:"CHE",
        dest:"BGL"
    },
    {
        start:"BGL",
        dest:"DEH"
    },
     {
        start:"MUM",
        dest:"CHE"
    },
]
// Find starting and destination of customer travel and the sort based on customer travel

function getObjectCount(obj){
    let contObj = {};
    for( key in obj){

        if(!contObj[obj[key].start]) contObj[obj[key].start] = 0;
        if(!contObj[obj[key].dest]) contObj[obj[key].dest] = 0;
        contObj[obj[key].start]++;
        contObj[obj[key].dest]++;
    }
    return contObj;
}
function getUserDesti(obj){
    let finalObj = {},c=0;
    for(a in obj){
        if(obj[a] === 1){
            finalObj[a] = a;
            c++;
        }
        if(c === 2) break;
    }
    return finalObj;
}
function getDestiStart(obj1,obj2){
    let start,destination;
    for(a in obj2){
        if(!start) (start =  obj1[obj2[a].start]);
        if(!destination) (destination =  obj1[obj2[a].dest]);
        if(start && destination) break;
    }
    return {
        start,
        destination
    }
}
function findDestination(obj) {

    const objectCount = getObjectCount(obj);
    const userDestination = getUserDesti(objectCount);
    const findStartEnd = getDestiStart(userDestination,obj);
    return findStartEnd;
}

console.log(findDestination(obj))