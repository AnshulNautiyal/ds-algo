class Node {
    constructor(data){
        this.data  = data;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data){
        let newNode = new Node(data);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }
    dequeue(){
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

let q = new Queue(); 