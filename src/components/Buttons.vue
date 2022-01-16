<template>
  <div class="buttons">
    <button @click="$store.dispatch('increment')" >+</button>
    <button @click="$store.dispatch('decrement')" >-</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.buttons{
    margin: 10px;
}
.buttons button{
    width: 4%;
    height: 30px;
    font-size: 20px;
}
</style>