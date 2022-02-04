import axios from "axios";

class WalletService {
    verify(publicKey, privateKey) {
        axios.get('https://blockchain.danilojakob.ch/api/get_chain?pub_key=' + publicKey + '&priv_key=' + privateKey).then(response => (
            console.log(response)
        ))
    }

    create(walletName) {
        return axios.get('https://blockchain.danilojakob.ch/api/create_wallet?wallet_name=' + walletName)
    }

    getBalance(walletAddress) {
        return axios.post('https://blockchain.danilojakob.ch/api/get_wallet_balance', {
            wallet_address: walletAddress
        }).then(response => response.data)
    }

    getFunds(walletAddress, amount) {
        return axios.post('https://blockchain-bank.danilojakob.ch/api/get_funds', {
            wallet_address: walletAddress,
            amount: amount
        })
    }
}

export default WalletService