// go through the code, the directions state make a class, 

// and have different functions within the class, that perform different things, 

// like appending values to the start of the list, and to the back of the list 

// finding index etc 

// see if you can log the list, to see if the values are being added properly. 


class Node { 
  constructor(value) { 
    this.value = value; 
    this.next = null;
  }
}


class linkedList { 
  constructor() { 
    this.head = null; 
    this.size = 0;
  } 

  isEmpty() { 
    return this.size === 0;
  } 

  getSize() { 
    return this.size;
  } 

  getFirst() { 
    return this.head;
  } 

  convertToString() { 
    let current = this.head;
    let str = "";

    while (current) { 
        str += current.value + " ";
        current = current.next;
    }
    return str;
  }

  getLast() { 
 if (this.isEmpty()) { 
    return null;
 }
 let node = this.head;

 while(node) { 
    if (!node.next) { 
        return node;
    }
    node = node.next;
 }
  } 

  pop() { 
    if (this.isEmpty()) 
    return null; 

    if (this.head.next == null) { 
        return null;
    } 

    let second_last = this.head; 

    while(second_last.next.next != null) 
        second_last = second_last.next;

        second_last.next = null;

        return this.head;
} 
  

  prepend(value) { 
    const node = new Node(value);
    if (this.isEmpty()) { 
        this.head = node;
    } else { 
        node.next = this.head;
        this.head = node;
    }
    this.size++
  } 

  append(value) { 
    const node = new Node(value);
    if(this.isEmpty()) { 
        this.head = node;
    } else { 
        let prev = this.head;
        while(prev.next) { 
            prev = prev.next;
        }
        prev.next = node;
    }
    this.size++
  } 

  at(index) { 
    let current = this.head;
    let count = 0;

    while(current !== null) { 
        if (count == index) 
            return current.value
            count++ 
            current = current.next;
        
    }
  } 

  find(value) { 
    if (this.isEmpty()) { 
        return -1;
    }
    let i = 0;
    let curr = this.head;
    while(curr) { 
        if (curr.value === value) { 
            return i; 
        } 
        curr = curr.next;
        i++
    }
    return -1;
  } 

  contains(value) { 
    if (this.isEmpty()) { 
        return false;
    }
    let curr = this.head;
    while(curr) { 
        if (curr.value === value) { 
            return true; 
        } 
        curr = curr.next;
    }
    return false;
  } 

  toString() { 
    let currentNode = this.head; 
    let result = ''; 

    while (currentNode !== null) { 
        result += `(${currentNode.value})->`;
        currentNode = currentNode.next;
    } 
    result += 'null';
    return result
  }

  print() { 
    if (this.isEmpty()) { 
        console.log('List is empty')
    } else { 
       let curr = this.head;
       let listValues = '';
       while(curr) { 
        listValues += `${curr.value} `;
        curr = curr.next;
       }
       console.log(listValues);
    }
  }
} 

const list = new linkedList() 

// console.log(list.isEmpty()); 
// console.log(list.getSize()); 





list.append(5);
list.append(10);
list.append(20); 
list.append(30);
list.append(40);
list.append(50); 
list.append(60);

console.log(list);

// console.log(list.getSize());

console.log(list.toString());

// list.print();
// console.log(list.getFirst());
// console.log(list.getLast());
// console.log(list.at(4));
// list.pop();
// console.log(list.find(5));



// console.log(list.contains(5));




// list.print();

// console.log(list.getSize());  

// console.log(list.getFirst());

// console.log(list.getLast());









// const n1 = new Node(100);
// console.log(n1); 

// const ll = new linkedList(); 

// ll.append(100);
// ll.append(200);
// ll.append(300);

// console.log(ll);

