import axios from "axios";

class BlockService {
    createBlock(block) {
        let bitcoin = require('bitcoinjs-lib')
        let bitcoinMessage = require('bitcoinjs-message')

        const keypair = bitcoin.ECPair.fromPrivateKey(this.fromHexString("b710c6602eb1555064613148eabbcbdcdd1ea5963813fb6c9474f2ce689e1dcc"));
        const message = block.amount.toString();
        const signature = bitcoinMessage.sign(message, keypair.privateKey);

        return axios.post('https://blockchain.danilojakob.ch/api/create_block/', {
            origin: block.origin,
            destination: block.destination,
            amount: block.amount,
            signature: signature.toString("hex")
        })
    }

    getBlocks(walletAddress) {
        return axios.post('https://blockchain.danilojakob.ch/api/get_blocks', {
            wallet_address: walletAddress
        })
    }

    fromHexString(hexString) {
        return new Buffer(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    }
}

export default BlockService