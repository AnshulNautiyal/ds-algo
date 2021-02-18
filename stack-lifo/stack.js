

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(data){
        let newNode = new Node(data);
        if(!this.first){
            this.first = newNode;
            this.last =  newNode;
        }else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
    }
    pop(){
        if(!this.first) return null;
        
        let temp = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}


let s = new Stack();

s.push(1);
s.push(2);
s.push(3);