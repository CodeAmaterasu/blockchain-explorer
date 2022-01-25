<template>
  <div id="container">
    <div id="signature-part">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3M10 7V5H8V17H20V5H18V7H10Z" />
      </svg>
      <DefaultLabel class="overflow-ellipses" :text="signatureText"/>
    </div>
    <div id="balance-part">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
      </svg>
      <DefaultLabel :text="balanceText"/>
    </div>
  </div>
</template>

<script>

import DefaultLabel from './../base/labels/DefaultLabel.vue'

export default {
  name: "WalletBlock",
  components: {
    DefaultLabel
  },
  props: {
    signature: {
      type: String,
      required: true
    },
    balance: {
      type: [Number, String],
      default: '0.0'
    }
  },
  computed: {
    signatureText() {
      return "Signature: " + this.signature
    },
    balanceText() {
      return "Balance: " + this.balance
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

#signature-part {
  display: flex;
  width: 750px;
  margin-right: 30px;
  white-space: nowrap;
  overflow: hidden;
  column-gap: 10px;
}

#balance-part {
  display: flex;
  column-gap: 10px;
}

p {
  margin: auto 0;
}
</style>