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

        while(temp.next.next !== null){
            temp = temp.next
        }
        temp.next = null
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

ll.deleteAtLast()
ll.deleteAtLast()
ll.deleteAtLast()


ll.printLL(ll.head)