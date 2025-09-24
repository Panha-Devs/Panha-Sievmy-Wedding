<script setup>
import { onErrorCaptured, ref } from "vue";
import MagicTransition from "./components/MagicTransition.vue";

// Use direct path to audio in public folder for better caching
const bgm = "/media/Westlife - Beautiful in White.mp3";

// Error handling
const hasError = ref(false);
const errorMessage = ref("");

onErrorCaptured((error, instance, info) => {
  console.error("App error caught:", error, info);
  hasError.value = true;
  errorMessage.value = "មានបញ្ហាកទេចនិកមួយ។ សំុអភ័យទោស។"; // Technical issue, sorry.
  return false;
});

function retryApp() {
  hasError.value = false;
  errorMessage.value = "";
  window.location.reload();
}
</script>

<template>
  <div>
    <!-- Error Boundary -->
    <div
      v-if="hasError"
      class="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white p-6"
    >
      <div class="text-center max-w-md">
        <h1 class="text-2xl font-bold text-yellow-300 mb-4">មានបញ្ហា</h1>
        <p class="text-gray-300 mb-6">{{ errorMessage }}</p>
        <button
          @click="retryApp"
          class="px-6 py-3 bg-yellow-300 text-black rounded-full font-semibold hover:bg-yellow-400 transition-colors"
        >
          ព្យាយាមម្តងទៀត
        </button>
      </div>
    </div>

    <!-- Main App -->
    <div v-else>
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
  </div>
</template>

<style>
.hidden-audio {
  display: none;
}

/* Global route transition */
/* fade-slide no longer used */
</style>
