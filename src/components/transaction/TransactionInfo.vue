<template>
    <div id="container">
        <div><DefaultLabel text="From:" /><LinkLabel url="#" :text="this.from" /></div>
        <div><DefaultLabel text="To:" /> <LinkLabel url="#" :text="this.from" /></div>
        <div><DefaultLabel text="Amount:"/><DefaultLabel :text="amount"/></div>
        <div><DefaultLabel text="Signatur:"/><DefaultLabel :text="signatur"/></div>
    </div>
</template>

<script>

import LinkLabel from './../base/labels/LinkLabel.vue'
import DefaultLabel from './../base/labels/DefaultLabel.vue'

export default {
  name: "Navigation",
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
div {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    display: flex;
}

p {
  margin: auto 0;
}
</style>