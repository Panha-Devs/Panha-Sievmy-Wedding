<script setup>
// Import the audio so Vite bundles it correctly and we can reference it safely.
import bgm from "./assets/Westlife - Beautiful in White.mp3";
</script>

<template>
  <div>
    <router-view />
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
</style>
