<template>
  <div id="container">
    <div class="name-item">
      <DefaultLabel class="overflow-ellipses" :text="nameText"/>
    </div>
    <div class="address-item">
      <svg @click="copyAddress" style="width:24px;height:24px" class="svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3M10 7V5H8V17H20V5H18V7H10Z" />
      </svg>
      <DefaultLabel :text="addressText" id="address-label" class="overflow-ellipses"/>
    </div>
    <div class="balance-item">
      <svg @click="openBalanceModal" class="svg" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
      </svg>
      <DefaultLabel v-model="balanceValue" :text="balanceText"/>
    </div>

    <ModalBox
        v-show="isBalanceModalVisible"
        @close="closeModal">
      <template v-slot:body>
        <div class="modal-container">
          <TitleLabel text="New Wallet" />
          <div class="form-margin form-margin-top">
            <div class="form-group form-margin">
              <label>Amount</label>
              <input type="text" v-model="this.amount" class="form-control" placeholder="0.0">
            </div>
          </div>
          <div class="action-container">
            <CancelButton id="cancel-button" text="Cancel" @click="closeModal" />
            <SubmitButton text="Send" @click="sendBalance" />
          </div>
        </div>
      </template>
    </ModalBox>

  </div>
</template>

<script>

import DefaultLabel from './../base/labels/DefaultLabel.vue'
import ModalBox from "@/components/base/ModalBox";
import TitleLabel from "@/components/base/labels/TitleLabel";
import CancelButton from "@/components/base/buttons/CancelButton";
import SubmitButton from "@/components/base/buttons/SubmitButton";
import WalletService from "@/service/WalletService";

export default {
  name: "WalletBlock",
  components: {
    DefaultLabel,
    ModalBox,
    TitleLabel,
    CancelButton,
    SubmitButton
  },
  data() {
    return {
      isBalanceModalVisible: false,
      amount: String,
      balanceValue: String
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    balance: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  created() {
    this.balanceValue = this.balance
  },
  methods: {
    openBalanceModal() {
      this.isBalanceModalVisible = true
    },
    closeModal() {
      this.isBalanceModalVisible = false
    },
    sendBalance() {
      this.isBalanceModalVisible = false
      let walletService = new WalletService()
      walletService.getFunds(this.address, this.amount)
      this.balanceValue = parseInt(this.balanceValue) + parseInt(this.amount)
    },
    async copyAddress() {
      await navigator.clipboard.writeText(this.address)
    }
  },
  computed: {
    nameText() {
      return "Name: " + this.name
    },
    balanceText() {
      return "Balance: " + this.balanceValue
    },
    addressText() {
      return "Address: " + this.address
    }
  }
}
</script>

<style scoped>
.overflow-ellipses {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#container {
  display: flex;
  border-radius: 10px;
  background: #E8E8E8;
  padding: 15px 20px;
}

.name-item {
  width: 200px;
  margin-right: 20px;
}

.address-item {
  width: 650px;
  margin-right: 20px;
  display: flex;
}

.balance-item {
  display: flex;
}

.svg {
  margin-right: 10px;
}
.svg:hover {
  cursor: pointer;
}
p {
  margin: auto 0;
}

.action-container {
  display: flex;
  justify-content: flex-end;
}

#cancel-button {
  margin-right: 25px;
}

</style>