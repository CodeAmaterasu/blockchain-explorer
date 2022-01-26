import axios from "axios";

class ChainService {
    getChain() {
        axios.get('https://blockchain.danilojakob.ch/api/get_chain/').then(response => (
            console.log(response)
        ))
    }

    getOpenChain() {
        return axios.get('https://blockchain.danilojakob.ch/api/get_openchain/')
    }

    check() {
        axios.get('https://blockchain.danilojakob.ch/api/check_blockchain/').then(response => (
            console.log(response)
        ))
    }
}

export default ChainService