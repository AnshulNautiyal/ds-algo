let p = {
    n:"",
    age:54,
    kid : [
        {
            n:"",
            age:30,
            kid: [
                {
                    n:"",
                    age:30,
                }
            ]
        }
    ]
}

function tranversObj(){
    let total = 0;

    return function sum(obj){
        for(let key in obj){
          
            if(key === 'age'){
                total += obj[key];
            }else if( key === 'kid' && Array.isArray(obj[key])){
                for(let arr in obj[key]){
                    sum(obj[key][arr])
                }
            }   
        }
        return total;
    }
}

let callSum = tranversObj();
console.log(callSum(p));







{/* <div class="sq"></div>
     <div class="sq sec"></div>

.sq {
    width: 200px;
    height: 200px;
    background-color:red;
    position:relative;
  }
  
  div::before {
      content:"";
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      width: 100px;
      height: 100px;
     border-radius: 50%;
     background-color:yellow;
  }
  div::after {
      content:"";
      position:absolute;
      top:50%;
      left:50%;
     transform:translate(-50%,-50%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
     background-color:pink;
  }
  div:first-of-type {
    margin-bottom:20px;
  }
  .sec {
      background-color:blue;
      
  } */}