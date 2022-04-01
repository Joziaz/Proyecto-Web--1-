

class LoginService {

    constructor() {
        this.repository = new Repository()
    }

    login(username, password) {
        username === "admin" && password === "123456"
            ? this.repository.insert("user", true)
            : this.repository.insert("user", false)
    }

    static confirmUser() {
        const isUser = new Repository().getItem("user")

        if(!isUser) {
            window.location.href = "http://127.0.0.1:5500/Html/login.htmldasds"
        }
    }
    
}