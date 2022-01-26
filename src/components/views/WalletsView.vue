<template>
  <div className="whiteboard-site">
    <div className="content-container background-color-white box-shadow">
      <div className="inner-whiteboard">
        <div className="titlebar-container">
          <div>
            <TitleLabel class="left-alignment" text="Wallets"/>
          </div>
          <div id="button-container">
            <SubmitButton id="left-button" text="Import" @click="showImportModal"/>
            <SubmitButton text="New Wallet +" @click="showNewWalletModal"/>
          </div>
        </div>
        <div id="transaction-container">
          <div className="transaction-element" v-for="wallet in this.wallets" :key="wallet.name">
            <WalletBlock class="box-shadow" :name="wallet.name" :balance="this.balances[wallet.name].balance"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalBox
      v-show="isImportModalVisible"
      @close="closeImportModal">
    <template v-slot:body>
      <div class="modal-container">
        <TitleLabel text="New Transaction" />
        <div class="form-margin form-margin-top">
          <div class="form-group form-margin form-margin-top">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="Robert">
          </div>
          <div class="form-group form-margin">
            <label>Public Key</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group form-margin form-margin-bottom">
            <label>Private Key</label>
            <input type="text" class="form-control" >
          </div>
        </div>
        <div class="action-container">
          <CancelButton id="cancel-button" text="Cancel" @click="closeImportModal" />
          <SubmitButton text="Send" @click="showImportModal" />
        </div>
      </div>
    </template>
  </ModalBox>

  <ModalBox
      v-show="isNewWalletModalVisible"
      @close="closeNewWalletModal">
    <template v-slot:body>
      <div class="modal-container">
        <TitleLabel text="New Wallet" />
        <div class="form-margin form-margin-top">
          <div class="form-group form-margin">
            <label>Name</label>
            <input type="text" v-model="this.newWalletName" class="form-control" placeholder="Robert">
          </div>
        </div>
        <div class="action-container">
          <CancelButton id="cancel-button" text="Cancel" @click="closeNewWalletModal" />
          <SubmitButton text="Send" @click="createNewWallet" />
        </div>
      </div>
    </template>
  </ModalBox>
</template>

<script>

import WalletBlock from "@/components/blocks/WalletBlock";
import TitleLabel from "../base/labels/TitleLabel";
import SubmitButton from "../base/buttons/SubmitButton";
import CancelButton from "@/components/base/buttons/CancelButton";
import ModalBox from "@/components/base/ModalBox";
import WalletService from "@/service/WalletService";

export default {
  name: "WalletsView",
  components: {
    SubmitButton,
    CancelButton,
    TitleLabel,
    WalletBlock,
    ModalBox
  },
  data() {
    return {
      isSearch: false,
      title: "Unprocessed Blocks",
      searchFieldValue: "",
      searchedAddress: "",
      isNewWalletModalVisible: false,
      isImportModalVisible: false,
      newWalletName: "",
      wallets: [],
      walletService: WalletService,
      balances: []
    }
  },
  created() {
    this.wallets = JSON.parse(localStorage.getItem('wallets'))
    this.walletService = new WalletService()

    console.log(this.wallets)

    for(let wallet of this.wallets) {
      this.getBalance(wallet.publicKey, wallet.name)
    }
    console.log(this.balances);
  },
  methods: {
    searchAddress() {
      if (this.searchFieldValue) {
        this.searchedAddress = this.searchFieldValue
        this.isSearch = true
        this.title = "Related Transactions"
      } else {
        this.searchedAddress = ""
        this.isSearch = false
        this.title = "Unprocessed Blocks"
      }
    },
    getBalance(publicKey, walletName) {
      this.walletService.getBalance(publicKey).then(data => {
        this.balances[walletName] = {
          balance: data.balance
        }
      })
    },
    createNewWallet() {
      const walletService = new WalletService()
      this.isNewWalletModalVisible = false
      if (localStorage.getItem('wallets') == null) {
        localStorage.setItem('wallets', JSON.stringify([]))
      }
      let wallets = JSON.parse(localStorage.getItem('wallets'))

      walletService.create(this.newWalletName).then( response => {
        wallets.push({
          name: response.data.wallet_name,
          publicKey: response.data.public_key,
          privateKey: response.data.private_key,
        })
        this.wallets = wallets
        localStorage.setItem('wallets', JSON.stringify(wallets))
      })
    },
    showImportModal() {
      this.isImportModalVisible = true
    },
    showNewWalletModal() {
      this.isNewWalletModalVisible = true
    },
    closeImportModal() {
      this.isImportModalVisible = false
    },
    closeNewWalletModal() {
      this.isNewWalletModalVisible = false
    }
  }
}
</script>

<style scoped>
.left-alignment {
  text-align: left;
  margin: 0;
}

#button-container {
  display: flex;
}

#left-button {
  margin-right: 20px;
}

.form-margin {
  margin: 15px 0;
}

.form-margin-top {
  margin-top: 30px;
}

.form-margin-bottom {
  margin-bottom: 30px;
}

.action-container {
  display: flex;
  justify-content: flex-end;
}

.small-label {
  font-size: 14px;
}

#cancel-button {
  margin-right: 25px;
}

.whiteboard-site {
  width: 1160px;
  margin-top: 90px;
  margin-bottom: 30px;
}

.test {
  width: 100px;
  height: 100px;
}

.content-container {
  border-radius: 10px;
  height: 900px;
}

.titlebar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.search-container {
  margin-top: 90px;
  margin-bottom: 30px;
  width: 100%;
}

#transaction-container {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  margin-top: 20px;
  height: 799px;
}

.inner-whiteboard {
  padding: 10px 30px;
}

.transaction-element {
  margin-bottom: 20px;
}
</style>