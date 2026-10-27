class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class LL {
    constructor() {
        this.head = null
        this.count = 0
    }

    insertAtFirst(val) {
        this.count++
        let newNode = new Node(val)

        if (this.head === null) {
            this.head = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    insertAtLast(val) {
        this.count++
        let newNode = new Node(val)

        if (this.head === null) {
            this.head = newNode
            return
        }
        let temp = this.head

        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode

    }

    deleteAtFirst() {

        if (this.head === null) {
            console.log("Empty Linked list")
            return
        }
        this.count--

        this.head = this.head.next
    }

    deleteAtLast() {

        if (this.head === null) {
            console.log("Empty Linked list")
            return
        }
        this.count--

        let temp = this.head

        while (temp.next.next !== null) {
            temp = temp.next
        }
        temp.next = null
    }

    inserAtPosition(val, p) {

        if (p <= 0 || p > this.count + 1) {
            console.log("not possible to be inserted")
            return
        }

        let newNode = new Node(val)

        if (p === 1) {
            newNode.next = this.head
            this.head = newNode
            this.count++
            return
        }

        let temp = this.head

        for (let i = 1; i < p - 1; i++) {
            temp = temp.next
        }

        newNode.next = temp.next
        temp.next = newNode
        this.count++
    }

    deleteAtPosition(p) {

        if (p <= 0 || p > this.count) {
            console.log("not possible to be inserted")
            return
        }

        if(p === 1){
            this.head = this.head.next
            this.count--
            return
        }

        let temp = this.head

        for(let i = 1 ; i < p-1 ; i++){
            temp = temp.next
        }

        temp.next = temp.next.next
        this.count--

    }

    printLL(head) {

        if (head === null) {
            console.log("empty linked list")
            return
        }

        let temp = head
        while (temp !== null) {
            process.stdout.write(temp.data + " -> ")
            temp = temp.next
        }
        console.log("null")

    }
}

let ll = new LL()


ll.insertAtLast(10)
ll.insertAtLast(20)
ll.insertAtLast(30)
ll.insertAtLast(40)
ll.insertAtLast(50)

// ll.deleteAtLast()
// ll.deleteAtLast()
// ll.deleteAtLast()

ll.inserAtPosition(35, 6)

ll.deleteAtPosition(7)

ll.printLL(ll.head)