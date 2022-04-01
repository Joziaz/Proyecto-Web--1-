
class ContactService {

    constructor(){
        this.repository = new Repository()
    }

    static createId() {
        if(!this.lastId)
            this.lastId = 0

        this.lastId += 1
        return this.lastId
    }

    get() {
        return this.repository.getItem("contacts")
    }

    insert(contact = new Contact()) {
        contact.id = ContactService.createId()
        this.repository.insert("contacts", contact)
    }

    delete(key) {
        this.repository.delete(key)
    }
}