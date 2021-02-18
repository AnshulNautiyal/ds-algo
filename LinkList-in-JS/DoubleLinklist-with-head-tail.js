// Doubly LinkList with Head and Tail 

function LinkList(){
    this.head = null;
    this.tail = null;
}

function Node(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

const ll = new LinkList();

// NOTE: create link list by adding item in sequence order
LinkList.prototype.addNodeFromTheEnd = function(data){
    const node = new Node(data);
    if(!this.head){
        this.head = this.tail = node;
        
    }else {
        let currentTailNode = this.tail;
        this.tail = node;
        currentTailNode.next = this.tail;
        this.tail.prev = currentTailNode;
    }
    
}

// NOTE: Add node in the beginning of link list.  Link list already exist.
LinkList.prototype.addNodeInBeginning = function(data){
    let newNode = new Node(data);
    if(!this.head){
        this.head = this.tail = newNode;
    }else {
        let currentHeadNode = this.head;
        this.head = newNode;
        this.head.next = currentHeadNode;
        currentHeadNode.prev = this.head;
    }
}

LinkList.prototype.removeNodeFromBeginning  = function(){
    if(!this.head){
        return 'Link list is empty';
    }else {
        this.head = this.head.next;
        if(!this.head) this.tail = null; // If there is only one node in link list
        this.head.prev = null;
    }
}

LinkList.prototype.removeNodeFromLast = function(){
    if(!this.head){
        return 'Link list did not exist';
    }else {
        this.tail = this.tail.prev;
        if(!this.tail) this.head = null; // If there is only one node in Link list
        this.tail.next = null;
    }
}

ll.addNodeFromTheEnd(1);
ll.addNodeFromTheEnd(2);
ll.addNodeFromTheEnd(3);
ll.addNodeInBeginning(4);
ll.addNodeInBeginning(5);
// console.log(ll);
// debugger;
// ll.removeNodeFromBeginning();
// ll.removeNodeFromBeginning();
console.log(ll);
debugger;
ll.removeNodeFromLast();
ll.removeNodeFromLast();
console.log(ll)



// HIGHLIGHT: slightly another way  to implement doubly link list

// function LinkList(head = null,tail = null){

//     this.head = head;
//     this.tail = tail;
// }

// function Node(value, next, prev) {
//     this.value = value;
//     this.next = next;
//     this.prev  =  prev;
// }

// LinkList.prototype.addNewNodeToHead = function(value){
//    const newNode = new Node(value,this.head, null);
//    if(this.head) this.head.prev = newNode;
//    else this.tail = newNode;
//    this.head = newNode;
//    return this;
// }

// LinkList.prototype.addNewNodeToTail = function(value) {
//     const newNode = new Node(value,null,this.tail);
//     if(this.tail) this.tail.next = newNode;
//     else this.head = newNode;
//     this.tail = newNode;
//     return this;
// }

// LinkList.prototype.removeFromTail = function() {
//     if(!this.head){
//         return 'Link List is empty';
//     }
//         this.tail = this.tail.prev;
//         if(!this.tail) this.head = null;
//         else this.tail.next = null;
// }

// LinkList.prototype.removeFromHead = function() {
//     if(!this.head){
//         return 'Link List is empty';
//     }
//     this.head = this.head.next;
//     if(!this.head)  this.tail = null;
//     else this.head.prev = null;
// }
