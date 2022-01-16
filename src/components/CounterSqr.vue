<template>
    <div class="sqr">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.counterSqr }}
    </div>
</template>

<script>
export default {

}
</script>

<style>
.sqr{
    font-size: 40px;
    border: 2px solid grey ;
    border-radius: 10px;
    width: 20%;
    margin: auto;
}
</style>