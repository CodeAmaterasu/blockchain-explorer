class Wallet {
    name = ""
    balance = ""
    privateKey = ""
    publicKey = ""

    constructor(name, publicKey, privateKey, balance) {
        this.name = name
        this.publicKey = publicKey
        this.privateKey = privateKey
        this.balance = balance
    }
}

export default Wallet