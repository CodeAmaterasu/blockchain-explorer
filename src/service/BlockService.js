import axios from "axios";

class BlockService {
    mine() {
        axios.get('https://blockchain.danilojakob.ch/api/mine_block/').then(response => (
            console.log(response)
        ))
    }

    createBlock(block) {
        let bitcoin = require('bitcoinjs-lib')
        let bitcoinMessage = require('bitcoinjs-message')

        const keypair = bitcoin.ECPair.fromPrivateKey(this.fromHexString("b710c6602eb1555064613148eabbcbdcdd1ea5963813fb6c9474f2ce689e1dcc"));
        const privateKey = keypair.privateKey;
        const message = block.amount.toString();
        const signature = bitcoinMessage.sign(message, privateKey, keypair.compressed);

        return axios.post('https://blockchain.danilojakob.ch/api/create_block/', {
            origin: block.origin,
            destination: block.destination,
            amount: block.amount,
            signature: signature.toString("hex")
        })
    }

    getBlocks(walletAddress) {
        axios.get('https://blockchain.danilojakob.ch/api/get_blocks?wallet_address=' + walletAddress).then(response => (
            console.log(response)
        ))
    }

    fromHexString(hexString) {
        return new Buffer(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    }

    toHexString(bytes) {
        return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
    }


    base64ToArrayBuffer(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len + 1);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        bytes[len] = 0
        return bytes;
    }
}

export default BlockService