<template>
  <div class="home">
    <h1>Home App</h1>
    <counter />
    <counter-sqr />
    <buttons />
    <color-input />
  </div>
</template>

<script>
import Buttons from '../components/Buttons.vue'
import ColorInput from '../components/ColorInput.vue'
import counter from '../components/Counter.vue'
import CounterSqr from '../components/CounterSqr.vue'

export default {
  components: { counter, CounterSqr, Buttons, ColorInput },
  name: 'Home',
  
}
</script>

<style>
  button{
    margin: 0px 10px;
  }
</style>