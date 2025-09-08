<script setup>
const props = defineProps({
  mapUrl: { type: String, required: true }
});
</script>

<template>
  <section id="location" class="w-full max-w-3xl mt-32 px-2">
    <h2 class="balance leading-tight text-center md:text-left font-khmer text-yellow-200 text-[clamp(1.75rem,6vw,3.5rem)]">
      ទីតាំង
    </h2>
    <div class="mt-6 flex justify-center">
      <a :href="mapUrl" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 font-khmer-kh text-yellow-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-500 px-5 py-3 rounded-full shadow text-[clamp(1rem,3.5vw,1.5rem)]">
        <span>បើកផែនទី</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3l-5.5 2-6-2-6.5 2.2v15.3l6.5-2.2 6 2 6.5-2.3v-15zm-12 1.5l5 1.7v12.3l-5-1.7v-12.3zm-5 1.6l3-1v12.3l-3 1v-12.3zm16 12.8l-3 1.1v-12.4l3-1v12.3z"/></svg>
      </a>
    </div>
  </section>
</template>
