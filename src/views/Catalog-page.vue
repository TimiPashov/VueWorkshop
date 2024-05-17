<script>
import CarComponent from '@/components/CarComponent.vue'
export default {
  components: { CarComponent },
  name: 'CatalogPage',
  async setup() {
    const res = await fetch('http://localhost:3000/cars')
    const cars = await res.json()
    console.log(cars)
    return {
      cars
    }
  },
  // Add a computed property to pass the cars data to the car-component
  computed: {
    carComponents() {
      return this.cars.map((car) => ({
        car
      }))
    }
  }
}
</script>
<template>
  <Suspense>
    <div>
      <h1>Catalog</h1>
      <div v-for="carComponent in carComponents" :key="carComponent.car._id">
        <car-component :car="carComponent.car" />
      </div>
    </div>
  </Suspense>
</template>
