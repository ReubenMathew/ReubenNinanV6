<template>
  <div id="app">
    <div class="bg-gray-200 min-h-screen p-16 flex items-center justify-center">
      <HorizontalCard :doc="doc"/>
      <HorizontalCard :doc="doc"/>
      <HorizontalCard :doc="doc"/>
      <!-- <PropertyCard :property="property"/>
      <PropertyCard :property="property"/>
      <PropertyCard :property="property"/> -->
    </div>
  </div>
</template>

<script>
// import PropertyCard from './components/PropertyCard'
import HorizontalCard from './components/HorizontalCard.vue'

export default {
  name: 'app',
  components: {
    // PropertyCard,
    HorizontalCard
  },
  data: () => ({
    doc: {
      imageURL: 'https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
    },
  })
}
</script>

<style src="./assets/tailwind.css"></style>