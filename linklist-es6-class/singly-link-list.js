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
    // remove node from the end
    pop(){
        if(!this.head) return 'Link list is empty.'

        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // edge case: when there is only one node left after removing few node
        if(this.length === 0){
            this.head = this.tail = null;
        }
        return currentNode;
    }
    // remove node from beginning
    shift(){
        if(!this.head) return 'List is empty';
        let removeHead = this.head;
        this.head = this.head.next;
        removeHead.next = null;
        this.length--;
        if(!this.length){
            this.tail = null;
        }
        return removeHead;
    }
    // add node from beginning 
    unshift(data) {
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
    }
    // find element at given index. Here index start with 0. (Your choice)
    get(index = 0){
        
        if(index < 0 || index >= this.length){
            return null;
        }
        let currentHead = this.head;
        let counter = 0;
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

    // set the new value in given index
    set(index = 0, value = ''){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.data = value;
            return true;
        }
        return false;
    }
    // insert new node in given index
    insert(index = 0, data = ''){
        if(index < 0 || index > this.length) return false;
        
        if(index === 0){
            this.unshift(data);
            return true;
        }else if(index === this.length){
            this.push(data);
            return true;
        }else {
            const newNode = new Node(data);
            const prevNode  = this.get(index - 1);
            const prevNextNode = prevNode.next;
            prevNode.next =  newNode;
            newNode.next  = prevNextNode;
            this.length++;
            return true;
        }
    }
    // remove node from specific location
    remove(index = 0){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift(); // first element
        if(index === this.length -1 ) return this.pop(); // last element
        
        const prevNode = this.get(index-1);
        const removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        return removeNode;

    }
    print(){
        let a = [];
        let ch = this.head;
        while(ch){
            a.push(ch.data);
            ch = ch.next;
        }
        return a;
    }
    // reverse the link list 
    reverse(){
        let currentNode = this.head;
        this.head =this.tail;
        this.tail = currentNode;
        let nextNode = null, prev = null;
        while(currentNode){
            nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
        }
    }
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
