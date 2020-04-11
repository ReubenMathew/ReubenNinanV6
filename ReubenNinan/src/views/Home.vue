<template>
  <div>
    <LandingPage/>
    <!-- Divider -->
    <Reflection/>

    <!-- Project Cards -->
    <div class="text-yellow-500 bg-gray-900 text-center font-semibold py-8 text-5xl">Project Showcase</div>
    <div class="bg-gray-200 min-h-screen px-16 flex flex-wrap py-8 justify-center">
      <HorizontalCard :doc="report"/>
      <HorizontalCard :doc="doc2"/>
      <a href="https://anchor.fm/amateur-hour/" class="hover:opacity-75">
      <HorizontalCard :doc="amateurHour"/>
      </a>
      <HorizontalCard :doc="doc4"/>
    </div>
    <!-- Footer -->
    <div class=" md:text-right text-center px-4 py-4 md:px-10 bg-yellow-500 font-semibold">
      Made with ❤️ by Reuben
    </div>
    
  </div>
</template>

<script>
// import PropertyCard from './components/PropertyCard'
import HorizontalCard from '../components/HorizontalCard.vue'
import LandingPage from '../components/LandingPage'
import Reflection from '../components/Reflection'

export default {
  name: 'home',
  components: {
    // PropertyCard,
    HorizontalCard,
    LandingPage,
    Reflection,
  },
  data: () => ({
    report: {
      imageURL: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
      title: 'Leveraging Compute Power for Drug Discovery',
      course: 'ENG2003',
      type: 'Technical Report',
      content: 'This is a technical report I wrote for an assignment in my ENG2003 course.'
    },
    doc2: {
      imageURL: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      title: 'Feedback Control Loops',
      course: 'ENG2003',
      type: 'Poster', 
      content: '',
    },
    amateurHour: {
      imageURL: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/3732480/3732480-1585444835024-6e9ef9b9c9cb3.jpg',
      title: 'Amateur Hour - Developer Podcast',
      course: 'Personal',
      type: 'Podcast',     
    },
    doc4: {
      imageURL: 'https://images.unsplash.com/photo-1502780809386-f4ed7a4a4c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      title: 'Back of a napkin - Containerization',
      course: 'ENG2003',
      type: 'Video',    
    },
  })
}
</script>

<style src="../assets/tailwind.css"></style>