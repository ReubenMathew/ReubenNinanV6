<template>
  <div id="app">
    <LandingPage/>
    <div class="bg-gray-200 min-h-screen px-16 flex flex-wrap py-16">
      <HorizontalCard :doc="doc1"/>
      <HorizontalCard :doc="doc2"/>
      <HorizontalCard :doc="doc3"/>
      <HorizontalCard :doc="doc4"/>

    </div>
  </div>
</template>

<script>
// import PropertyCard from './components/PropertyCard'
import HorizontalCard from '../components/HorizontalCard.vue'
import LandingPage from '../components/LandingPage'
export default {
  name: 'home',
  components: {
    // PropertyCard,
    HorizontalCard,
    LandingPage
  },
  data: () => ({
    doc1: {
      imageURL: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80',
      title: 'Leveraging Compute Power for Drug Discovery',
      course: 'ENG2003',
      type: 'Technical Report',  
    },
    doc2: {
      imageURL: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      title: 'Feedback Control Loops',
      course: 'ENG2003',
      type: 'Poster', 
    },
    doc3: {
      imageURL: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/3732480/3732480-1585444835024-6e9ef9b9c9cb3.jpg',
      title: 'Amateur Hour - Developer Podcast',
      course: 'Personal',
      type: 'Podcast',     
    },
    doc4: {
      imageURL: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      title: 'Control Loops in Software',
      course: 'ENG2003',
      type: 'Handout',    
    },
  })
}
</script>

<style src="../assets/tailwind.css"></style>