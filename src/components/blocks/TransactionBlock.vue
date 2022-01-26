<template>
    <div id="container">
        <div class="from-item"><DefaultLabel text="Origin:" /><LinkLabel class="overflow-ellipses" url="#" :text="this.from" /></div>
        <div class="to-item"><DefaultLabel text="Destination:" /> <LinkLabel class="overflow-ellipses" url="#" :text="this.to" /></div>
        <div class="amount-item"><DefaultLabel text="Amount:"/><DefaultLabel :text="amount"/></div>
    </div>
</template>

<script>

import LinkLabel from './../base/labels/LinkLabel.vue'
import DefaultLabel from './../base/labels/DefaultLabel.vue'

export default {
  name: "TransactionBlock",
  components: {
    LinkLabel,
    DefaultLabel,
  },
  props: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        signatur: {
            type: String,
            required: true
        }
  }
}
</script>
 
<style scoped> 

#container {
    display: flex;
    border-radius: 10px;
    background: #E8E8E8;
    padding: 15px 20px;
}
.from-item, .to-item {
  width: 450px;
  margin-right: 20px;
}

.amount-item {
}

.overflow-ellipses {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
div {
    margin: 0;
    padding: 0;
    display: flex;
}

p {
  margin: auto 0;
}
</style>