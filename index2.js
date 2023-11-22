//Set up a binary tree node
class Node {
  constructor(product) {
    this.data = product;
    this.left = this.right = null;
  }
}
let root;
// Compute the "maxDepth" of a tree -- the number of nodes along the longest path from the root node
// down to the farthest leaf node.
function maxDepth(node) {
  if (node == null) return 0;
  else {
    //compute the depth of each subtree
    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);

    //use the larger one
    if (leftDepth > rightDepth) return leftDepth + 1;
    else return rightDepth + 1;
  }
}
// Example binary tree
root = new Node(1);
root.left = new Node(8);
root.right = new Node(17);
root.left.left = new Node(3);
root.left.left.left = new Node(8);
root.left.left.right = new Node(5);
root.left.right = new Node(2);
root.right.left = new Node(14);
root.right.left.left = new Node(4);
root.right.left.right = new Node(6);

//Expected height output: 4

//Example 2 binary tree
// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

//Expected height output: 3

console.log("Height of tree is : " + maxDepth(root));

// Time Complexity: best case: O(N) / O(V+E), since in the worst case, BFS algorithm explores every node and edge.
// Space Complexity: O(N) due to recursive stack.
// (See readMe.file for more details.)
