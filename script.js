const { createApp } = Vue

createApp({
  data(){
    return {
      message: 'Hello Vue 3.0 + Vite'
    }
  },
  mounted(){
    console.log('mounted')
  }
}).mount('#app')