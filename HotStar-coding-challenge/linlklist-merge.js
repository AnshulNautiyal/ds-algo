
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // this push function adding node at the end of singly link list. In short, Adding node from the end
    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    // find element at given index. Here index start with 0. (Your choice)
    
}

let sll1 = new SinglyLinkList();
let sll2 = new SinglyLinkList();

sll1.push(1);
sll1.push(2);
sll1.push(3);
sll1.push(4);

sll2.push(5);
sll2.push(6);
sll2.push(7);
sll2.push(8);


function get(index = 0,head){
        
    if(index < 1 ){
        return null;
    }
    let currentHead = head;
    let counter = 1;
    // while(counter <= index){
    //     if(counter === index){
    //         return currentHead;
    //     }
    //     currentHead = currentHead.next;
    //     counter++;
    // }
    while(counter !== index){
        currentHead = currentHead.next;
        counter++;
    }
    return currentHead;
}
function mergeLinkList(h1,h2,start,last) {

    let sh = start !== 1 ? get(start - 1, h1) : null;
    let lh = get(last + 1, h1);
    
    sh ? (sh.next = h2) : (sh = h1 = h2);
    let temph2 = sh;
    while(temph2.next){
        temph2 = temph2.next;
    }
    temph2.next = lh;
    console.log(h1)
    

}

mergeLinkList(sll1.head,sll2.head, 4,4);