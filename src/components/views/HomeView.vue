<template>
  <div class="whiteboard-site">
    <div class="input-group input-group-lg search-container box-shadow border-radius search-field">
      <input v-model="searchFieldValue" type="text" class="form-control" placeholder="Search Address..." aria-label="Search Address...">
      <div class="input-group-append">
        <button class="btn background-color-secondary color-white" type="button" v-on:click="searchAddress">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="content-container background-color-white box-shadow">
      <div class="inner-whiteboard">
        <div class="titlebar-container">
          <div>
            <TitleLabel class="left-alignment" :text="title" />
            <DefaultLabel v-if="this.isSearch" class="left-alignment color-lightgrey small-label" :text="searchedAddress" />
          </div>
          <SubmitButton v-if="!this.isSearch" text="New Transaction +" @click="showModal" />
        </div>
        <div id="transaction-container">
          <div class="transaction-element" v-for="block in this.unprocessedBlocks" :key="block.signature">
            <TransactionInfo class="box-shadow" :signatur="block.signature" :amount="block.amount.toString()" :to="block.destination" :from="block.origin" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalBox
      v-show="isModalVisible"
      @close="closeModal">
    <template v-slot:body>
      <div id="modal-container">
        <TitleLabel text="New Transaction" />
        <div class="form-margin form-margin-top">
          <label>Wallet</label>
          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect01" v-model="selectedPublicKey">
              <option :value="wallet.publicKey" v-for="wallet in wallets" :key="wallet.name">{{wallet.name}}</option>
            </select>
          </div>
          <div class="form-group form-margin">
            <label>Destination</label>
            <input v-model="destination" type="text" class="form-control" placeholder="YD7gTexLspnD3Zu+0eMgaJ3tyqEaLDEbuVVRzmMwXWhU4NaASyEkSa5yTidKj2KZ4vcu2sZYnT+sdmFhdrFb2w==">
          </div>
          <div class="form-group form-margin form-margin-bottom">
            <label>Amount</label>
            <input v-model="amount" type="text" class="form-control" placeholder="0">
          </div>
        </div>
        <div id="action-container">
          <CancelButton id="cancel-button" text="Cancel" @click="closeModal" />
          <SubmitButton text="Send" @click="sendTransaction" />
        </div>
      </div>
    </template>
  </ModalBox>
</template>

<script>
import TransactionInfo from '../blocks/TransactionBlock.vue'
import TitleLabel from "../base/labels/TitleLabel";
import CancelButton from "@/components/base/buttons/CancelButton";
import SubmitButton from "../base/buttons/SubmitButton";
import DefaultLabel from "../base/labels/DefaultLabel";
import ModalBox from "@/components/base/ModalBox";
import ChainService from "@/service/ChainService";
import BlockService from "@/service/BlockService";
import LocalStorageHelper from "@/LocalStorageHelper";

export default {
  name: "HomeView",
  components: {
    DefaultLabel,
    SubmitButton,
    TitleLabel,
    TransactionInfo,
    CancelButton,
    ModalBox
  },
  data() {
    return {
      isSearch: false,
      title: "Unprocessed Blocks",
      searchFieldValue: "",
      searchedAddress: "",
      isModalVisible: false,

      wallets: [],
      destination: "",
      amount: "",
      selectedPublicKey: "a",
      unprocessedBlocks: [],

      blockService: new BlockService(),
      chainService: new ChainService(),
      localStorageHelper: new LocalStorageHelper()
    }
  },
  props: {
    walletsRO: {
      type: Array,
      default: () => []
    },
    balancesRO: {
      type: Array,
      default: () => []
    }
  },
  created() {
    this.chainService.getOpenChain().then(response => {
        this.unprocessedBlocks = response.data.chain
    })

    this.wallets = this.localStorageHelper.getItem('wallets', true, [])
  },
  methods: {
    searchAddress() {
      if (this.searchFieldValue) {
        this.searchedAddress = this.searchFieldValue
        this.isSearch = true
        this.title = "Related Transactions"

        this.blockService.getBlocks(this.searchedAddress).then(response => {
          this.unprocessedBlocks = response.data
        })
      } else {
        this.searchedAddress = ""
        this.isSearch = false
        this.title = "Unprocessed Blocks"
      }
    },

    showModal() {
      this.isModalVisible = true;
    },

    sendTransaction() {
      this.isModalVisible = false;

      this.blockService.createBlock({
        origin: this.selectedPublicKey,
        destination: this.destination,
        amount: this.amount
      })

      this.setModalDefaultValues()
    },

    closeModal() {
      this.isModalVisible = false;
      this.setModalDefaultValues()
    },

    setModalDefaultValues() {
      this.destination = ""
      this.amount = ""
    },

    onChange(value) {
      this.selectedPublicKey = value
    }
  }
}
</script>
 
<style scoped>
.left-alignment {
  text-align: left;
  margin: 0;
}

.small-label {
  font-size: 14px;
}

.whiteboard-site {
  width: 1160px;
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
  text-align:justify;
  margin-top: 20px;
  height: 799px;
}

.inner-whiteboard {
  padding: 10px 30px;
}

.transaction-element {
  margin-bottom: 20px;
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

#action-container {
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