import { ProductCard } from "./components/ProductCard.js"

const { createApp } = Vue

createApp({
  components: {
    "product-card": ProductCard
  },
  data(){
    return {
      itemList: [],
      cartItemList: [],
      total: 0,
    }
  },
  methods: {
    parenthellofunction() {
      console.log('Hello from parent');
    },
    handleaddtocard(id) {
      console.log("click to add button element", id)
      // increase number to item into itemList
      const item = this.itemList.find(item => item.id === id)
      item.number++
      console.log("this.itemList : ", this.itemList)
      // check all item into itemList 
        // if number > 0, add item into cartItemList
      this.cartItemList = this.itemList.filter(item => item.number > 0)
      this.updatetotalprice()
    },
    decreasenumber(id) {
      console.log("click to decrease button element", id)
      // find element with id
      const item = this.itemList.find(item => item.id === id)
      item.number--
      // check if number < or equal to 0: delete
      if(item.number <= 0) {
        this.deleteitemcart(id)
      }
      this.updatetotalprice()
    },
    deleteitemcart(id) {
      console.log("click to delete button element", id)

      const item = this.itemList.find(item => item.id === id)
      item.number = 0

      // delete item into cartItemList with id = id
      this.cartItemList = this.cartItemList.filter(item => item.id!== id)
      // // update total
      this.updatetotalprice()
    },
    updatetotalprice(){
      let total = 0
      this.cartItemList.forEach(item => {
        total+= item.price * item.number
      })
      this.total = total
    }
  },
  mounted(){
    fetch("products.json")
      .then(res => res.json())
      .then(data => {
        console.log("On mounted : ", data)
        this.itemList = data
      })
  }
}).mount('#app')