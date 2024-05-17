<script>
export default {
  name: 'CarComponent',
  props: {
    car: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="container">
    <h1>{{ car.make }}</h1>
    <p>- {{ car.model }}</p>
  </div>
</template>
<style>
@import url('../styles/CarComponent.css');
</style>
