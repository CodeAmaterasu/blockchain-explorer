<template>
  <div class="whiteboard-site">
    <div class="content-container background-color-white box-shadow">
      <div class="inner-whiteboard">
        <div class="titlebar-container">
          <div>
            <TitleLabel class="left-alignment" text="Wallets"/>
          </div>
          <div id="button-container">
            <SubmitButton id="left-button" text="Import" @click="showImportModal"/>
            <SubmitButton text="New Wallet +" @click="showNewWalletModal"/>
          </div>
        </div>
        <div id="transaction-container">
          <div class="transaction-element" v-for="wallet in this.wallets" :key="wallet.name">
            <WalletBlock class="box-shadow" :name="wallet.name" :address="wallet.publicKey" :balance="wallet.balance.toString()"/>
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
import LocalStorageHelper from "@/LocalStorageHelper";
import Wallet from "@/components/data/Wallet";

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
      isNewWalletModalVisible: false,
      isImportModalVisible: false,
      newWalletName: "",
      wallets: [],
      storageWallets: [],

      walletService: new WalletService(),
      localStorageHelper: new LocalStorageHelper()
    }
  },
  created() {
    this.getWalletsBalance()
  },
  methods: {
    async getWalletsBalance() {
      this.wallets = []
      this.storageWallets = this.localStorageHelper.getItem('wallets', true, [])

      for (const wallet of this.storageWallets) {

        await this.walletService.getBalance(wallet.publicKey).then(data => {
          let fullWallet = new Wallet(wallet.name, wallet.publicKey, wallet.privateKey, data.balance)
          this.wallets.push(fullWallet)
        })
      }
    },

    createNewWallet() {
      this.storageWallets = this.localStorageHelper.getItem('wallets', true, [])
      this.walletService.create(this.newWalletName).then( response => {
        const newWallet = new Wallet(response.data.wallet_name, response.data.public_key, response.data.private_key, 0)
        this.storageWallets.push(newWallet)

        this.localStorageHelper.setItem('wallets', this.storageWallets, true)

        this.getWalletsBalance()
        this.closeNewWalletModal()
        this.ResetModalValues()
      })
    },

    showImportModal() {
      this.isImportModalVisible = true
    },

    closeImportModal() {
      this.isImportModalVisible = false
    },

    showNewWalletModal() {
      this.isNewWalletModalVisible = true
    },

    closeNewWalletModal() {
      this.isNewWalletModalVisible = false
      this.ResetModalValues()
    },

    ResetModalValues() {
      this.newWalletName = ""
    },
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

#cancel-button {
  margin-right: 25px;
}

.whiteboard-site {
  width: 1160px;
  margin-top: 90px;
  margin-bottom: 30px;
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