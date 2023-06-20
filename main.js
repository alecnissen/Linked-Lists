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

console.log(list.isEmpty()); 
console.log(list.getSize()); 



list.prepend(30);
list.prepend(10);
list.prepend(20); 
list.print();

console.log(list.getSize()); 


// const n1 = new Node(100);
// console.log(n1); 

// const ll = new linkedList(); 

// ll.append(100);
// ll.append(200);
// ll.append(300);

// console.log(ll);

