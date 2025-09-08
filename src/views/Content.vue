<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- Background Video -->
    <video class="fixed top-0 left-0 w-full h-full object-cover z-0" autoplay loop muted playsinline>
      <source src="/src/assets/video1.mp4" type="video/mp4" />
    </video>

    <!-- Content overlay and sections -->
    <div class="relative z-10 flex flex-col items-center text-white text-center px-6 pt-24 pb-24" style="background: rgba(0,0,0,0.35);">
      <!-- Volume toggle button -->
      <button
        @click="toggleMute"
        class="fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-yellow-400 text-yellow-300 shadow z-20"
        :aria-label="isMuted ? 'Unmute background music' : 'Mute background music'"
        title="Toggle sound"
      >
        <span v-if="isMuted" class="inline-block" aria-hidden="true">
          <!-- volume off icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M16.5 12c0-1.54-.58-2.94-1.53-4l1.42-1.42A7.943 7.943 0 0 1 18.5 12c0 1.98-.72 3.78-1.91 5.18l-1.41-1.41A5.98 5.98 0 0 0 16.5 12z"/>
            <path d="M14 12c0-.88-.36-1.68-.94-2.26l1.42-1.42A5.98 5.98 0 0 1 16 12c0 .88-.18 1.72-.52 2.48l-1.42-1.42c.25-.33.39-.74.39-1.06z"/>
            <path d="M3 9v6h4l5 5V4L7 9H3z"/>
            <path d="M3 3l18 18-1.41 1.41L1.59 4.41 3 3z"/>
          </svg>
        </span>
        <span v-else class="inline-block" aria-hidden="true">
          <!-- volume on icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3z"/>
            <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            <path d="M14 7.77v8.46c1.76-.77 3-2.53 3-4.23s-1.24-3.46-3-4.23z"/>
          </svg>
        </span>
      </button>

      <!-- Composed sections -->
      <HomeSection />
      <GallerySection />
      <DetailsSection />
      <AgendaSection />
      <LocationSection :mapUrl="mapUrl" />
      <RSVPSection v-model="rsvp" :email="rsvpEmail" />
      <CountdownSection :timeLeft="timeLeft" :isPast="isPast" />
    </div>
  </div>
  
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import AgendaSection from "../components/sections/AgendaSection.vue";
import CountdownSection from "../components/sections/CountdownSection.vue";
import DetailsSection from "../components/sections/DetailsSection.vue";
import GallerySection from "../components/sections/GallerySection.vue";
import HomeSection from "../components/sections/HomeSection.vue";
import LocationSection from "../components/sections/LocationSection.vue";
import RSVPSection from "../components/sections/RSVPSection.vue";

// Volume toggle
const isMuted = ref(false);
function toggleMute() {
  const el = document.getElementById("bgm");
  if (!el) return;
  el.muted = !el.muted;
  isMuted.value = el.muted;
}
onMounted(() => {
  const el = document.getElementById("bgm");
  if (el) {
    isMuted.value = !!el.muted;
  }
});

// Map URL and RSVP handling
const mapUrl = ref("https://maps.google.com");
const rsvp = ref({ name: "", attending: "yes", message: "" });
const rsvpEmail = "example@example.com"; // TODO: replace with your email or form endpoint

// Countdown to event date (Asia/Phnom Penh, UTC+7)
const targetDate = new Date("2025-06-26T17:00:00+07:00");
const now = ref(Date.now());
let timer;
onMounted(() => {
  timer = setInterval(() => (now.value = Date.now()), 1000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});

function diffParts(ms) {
  const clamp = Math.max(0, ms);
  const totalSeconds = Math.floor(clamp / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}
const timeLeft = computed(() => diffParts(targetDate.getTime() - now.value));
const isPast = computed(() => targetDate.getTime() - now.value <= 0);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Lavishly+Yours&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;700&display=swap");

.font-khmer-kh {
  font-family: "Kantumruy Pro", sans-serif;
}

.font-khmer {
  font-family: "Koulen", serif;
}

body {
  scroll-padding-top: 100px;
}
</style>
