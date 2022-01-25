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
          <SubmitButton v-if="!this.isSearch" text="New Transaction +" />
        </div>
        <div id="transaction-container">
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
          <div class="transaction-element">
            <TransactionInfo class="box-shadow" signatur="HGdgjkkjjsdyjoiysjoiesgnsuiduif" amount="253.32" to="Danilo" from="Gölan" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TransactionInfo from '../transaction/TransactionInfo.vue'
import TitleLabel from "../base/labels/TitleLabel";
import SubmitButton from "../base/buttons/SubmitButton";
import DefaultLabel from "../base/labels/DefaultLabel";

export default {
  name: "Navigation",
  components: {
    DefaultLabel,
    SubmitButton,
    TitleLabel,
    TransactionInfo
  },
  data() {
    return {
      isSearch: false,
      title: "Unprocessed Blocks",
      searchFieldValue: "",
      searchedAddress: ""
    }
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

.search-container {
  margin-top: 90px;
  margin-bottom: 30px;
  width: 100%;
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
</style>