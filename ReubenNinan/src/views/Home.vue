<template>
  <div>
    <LandingPage/>
    
    <!-- Divider -->
    <Reflection/>

    <!-- Project Showcase -->
    <div class="text-yellow-500 bg-gray-900 text-center font-semibold py-8 text-5xl">Project Showcase</div>
    <ProjectBoard/>

    <Footer/>

    
  </div>

</template>

<script>
// import PropertyCard from './components/PropertyCard'
import LandingPage from '../components/LandingPage'
import Reflection from '../components/Reflection'
import ProjectBoard from '../components/ProjectBoard'
import Footer from '../components/Footer'

export default {
  name: 'home',
  components: {
    LandingPage,
    Reflection,
    ProjectBoard,
    Footer,
  },
  data: () => ({
    
  })
}
</script>

<style src="../assets/tailwind.css"></style>