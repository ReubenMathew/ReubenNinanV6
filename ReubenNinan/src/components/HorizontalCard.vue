<template>
<div class = "p-4">
<div class="max-w-sm rounded  overflow-hidden shadow-lg">
  <img class="w-full h-auto" :src="doc.imageURL" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{doc.title}}</div>
    <p class="text-grey-darker text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-yellow-600 shadow-md rounded-full px-3 py-1 text-sm font-semibold mr-2">#{{doc.course}}</span>
    <span class="inline-block bg-yellow-600 shadow-md rounded-full px-3 py-1 text-sm font-semibold mr-2">#{{doc.type}}</span>
  </div>
</div>
</div>
</template>

<script>
export default {
    props: ['doc'],
}
</script>