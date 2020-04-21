<template>
<div class = "p-4 lg:transition lg:duration-300 lg:ease-in-out transform hover:scale-105">
<div class="max-w-xl rounded-lg border border-gray-300 overflow-hidden shadow-md">
  <img class="w-full h-auto" :src="doc.imageURL" alt="Project Splash Image">
  <div class="px-6 py-6">
    <div class="font-bold text-xl mb-2">{{doc.title}}</div>
    <p class="text-grey-darker text-base">
      {{doc.content}}  
    </p>
  </div>
  <div class="px-6 py-4 flex text-gray-900">
    <span class="inline-block bg-yellow-500 shadow-md rounded-full px-3 py-2 text-sm font-semibold mr-2">#{{doc.course}}</span>
    <span class="inline-block bg-yellow-500 shadow-md rounded-full px-3 py-2 text-sm font-semibold mr-2">#{{doc.type}}</span>
  </div>
</div>
</div>
</template>

<script>
export default {
    props: ['doc'],
}
</script>