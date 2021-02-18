class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let tempRoot = this.root;
        while(tempRoot){
            if(data === tempRoot.data) return null; // handle duplicate case
            if(data < tempRoot.data){
                if(tempRoot.left){
                    tempRoot = tempRoot.left;
                }else {
                    tempRoot.left = newNode;
                    return this;
                }
                
            }else if(data > tempRoot.data){
                
                if(tempRoot.right){
                    tempRoot = tempRoot.right;
                }else {
                    tempRoot.right = newNode;
                    return this;
                }
            }
        }
    }
    findNode(data){
        if(!this.root) return false;
        let start = this.root;
        while(true){
            if(start.data === data){
                return true;
            }else if(data < start.data){
                if(start.left){
                    start = start.left;
                }else{
                    return false;
                }
            }else if(data > start.data && start.right){
                if(start.right){
                    start = start.right;
                }else{
                    return false;
                }
            }
        }
    }

    // BSF: Traverse tree through BFS
    BFS(){
        let data = this.root,
            queue = [],
            visited = [];
            queue.push(data);
            while(queue.length){
                data = queue.shift();
                visited.push(data);
                if(data.left) queue.push(data.left);
                if(data.right) queue.push(data.right);
            }
            return visited;
    }

    // DFS - pre-order : get left node first and the right
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    // DFS - post-order: traverse the tree first and when you reach the leaf node the pick up the node
    DFSPostOrder(){
        let currentNode = this.root;
        let data=[];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
            data.push(currentNode.data);
        }
        traverse(currentNode);
        return data;
    }
     // DFS - in-order: cover the left side of root node first and then right side of root node
     DFSInOrder(){
        let currentNode = this.root;
        let data=[];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left);
            data.push(currentNode.data);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(currentNode);
        return data;
    }
}

let bst = new BST();

// bst.insert(4);
// bst.insert(3);
// bst.insert(2);
// bst.insert(1);
// bst.insert(5);
// bst.insert(6);
// bst.insert(7);
// bst.insert(8);
bst.insert(10);
bst.insert(15);
bst.insert(20);
bst.insert(6);
bst.insert(3);
bst.insert(8);
