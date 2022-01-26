import axios from "axios";

class WalletService {
    verify(publicKey, privateKey) {
        axios.get('https://blockchain.danilojakob.ch/api/get_chain?pub_key=' + publicKey + '&priv_key=' + privateKey).then(response => (
            console.log(response)
        ))
    }

    create(walletName) {
        axios.get('https://blockchain.danilojakob.ch/api/create_wallet?wallet_name=' + walletName).then(response => (
            console.log(response)
        ))
    }

    getBalance(walletAddress) {
        axios.get('https://blockchain.danilojakob.ch/api/get_wallet_balance?wallet_address=' + walletAddress).then(response => (
            console.log(response)
        ))
    }
}

export default WalletService