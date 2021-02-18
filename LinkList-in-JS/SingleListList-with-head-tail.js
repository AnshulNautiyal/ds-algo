//  Singly link List with Head and Tail

function SinglyLinkList() {
    this.head = null;
    this.tail = null;
}

function Node(data){
    this.data = data;
    this.next = null;
}

// create linklist
const ll = new SinglyLinkList();


SinglyLinkList.prototype.addNodeFromBeginning = function(data){
    let newNode = new Node(data);
    if(!this.head){ // this is going to be first node
        this.head = this.tail = newNode;
    }else {
        newNode.next = this.head;
        this.head = newNode;
    }  
}

SinglyLinkList.prototype.addNodeFromLast = function(data){
    let newNode = new Node(data);
    if(!this.head){
        this.head = this.tail = newNode;
    }
    else{
        this.tail.next = newNode;
        this.tail = newNode;
    }
}
// Add node after given element
// Add node before given element
// Remove only first node
// Remove only last node
// Remove given node from link list
// Remove duplicate node from link list

ll.addNodeFromBeginning(1);
ll.addNodeFromBeginning(2);
ll.addNodeFromBeginning(3);
console.log(ll)
ll.addNodeFromLast(6);
ll.addNodeFromLast(5);
ll.addNodeFromLast(4);
console.log(ll)