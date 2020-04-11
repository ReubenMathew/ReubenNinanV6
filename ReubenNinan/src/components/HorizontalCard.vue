<template>
<div class = "p-4">
<div class="max-w-lg rounded-lg overflow-hidden shadow-xl">
  <img class="w-full h-auto" :src="doc.imageURL" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{doc.title}}</div>
    <p class="text-grey-darker text-base">
      {{doc.content}}  
    </p>
  </div>
  <div class="px-6 py-4 flex">
    <span class="inline-block bg-yellow-600 shadow-md rounded-full px-3 py-2 text-sm font-semibold mr-2">#{{doc.course}}</span>
    <span class="inline-block bg-yellow-600 shadow-md rounded-full px-3 py-2 text-sm font-semibold mr-2">#{{doc.type}}</span>
  </div>
</div>
</div>
</template>

<script>
export default {
    props: ['doc'],
}
</script>