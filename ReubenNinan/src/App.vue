<template>
  <div id="app">
    <LandingPage/>
    <div class="bg-gray-200 min-h-screen p-16 flex flex-wrap items-center justify-between">
      
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
import LandingPage from './components/LandingPage'

export default {
  name: 'app',
  components: {
    // PropertyCard,
    HorizontalCard,
    LandingPage
  },
  data: () => ({
    doc: {
      imageURL: 'https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
    },
  })
}
</script>

<style src="./assets/tailwind.css"></style>