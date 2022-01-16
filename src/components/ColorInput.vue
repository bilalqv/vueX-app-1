<template>
  <div>
      <input type="text" placeholder="Enter Color" v-model="colorCode" >
</div>
</template>

<script>
export default {
  computed: {
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newColor){
        this.$store.dispatch('setColorCode', newColor)
      }
    }
  }
}
</script>