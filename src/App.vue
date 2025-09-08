<script setup>
// Import the audio so Vite bundles it correctly and we can reference it safely.
import bgm from "./assets/Westlife - Beautiful in White.mp3";
import MagicTransition from "./components/MagicTransition.vue";
</script>

<template>
  <div>
    <RouterView v-slot="{ Component, route }">
      <MagicTransition>
        <component :is="Component" :key="route.fullPath" />
      </MagicTransition>
    </RouterView>
    <!-- Hidden background music; started on user interaction from Home.vue -->
    <audio id="bgm" class="hidden-audio" preload="auto" loop>
      <source :src="bgm" type="audio/mpeg" />
    </audio>
  </div>

</template>

<style>
.hidden-audio {
  display: none;
}

/* Global route transition */
/* fade-slide no longer used */
</style>
