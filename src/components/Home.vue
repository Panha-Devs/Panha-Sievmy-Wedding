<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const starLayer = ref(null);

function startMusic() {
  const el = document.getElementById("bgm");
  if (el) {
    // Attempt to play; ignore errors due to policies
    el.play?.().catch(() => {});
  }
}

function spawnMagic(e) {
  const container = starLayer.value;
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const x = (e.clientX ?? rect.left + rect.width / 2) - rect.left;
  const y = (e.clientY ?? rect.top + rect.height / 2) - rect.top;

  const count = 14;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "star";
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 80; // 60-140px
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    const size = 6 + Math.floor(Math.random() * 6); // 6-11px
    const duration = 550 + Math.floor(Math.random() * 250);
    star.style.setProperty("--x", `${x}px`);
    star.style.setProperty("--y", `${y}px`);
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--dur", `${duration}ms`);
    container.appendChild(star);
    // cleanup
    setTimeout(() => star.remove(), duration + 50);
  }
}

function onCtaClick(e) {
  spawnMagic(e);
  startMusic();
  // Navigate after brief animation so users can see the effect
  setTimeout(() => router.push("/content"), 700);
}

// Pre-warm audio element by loading after mount (optional)
onMounted(() => {
  const el = document.getElementById("bgm");
  el?.load?.();
});
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Magic stars layer -->
    <div
      ref="starLayer"
      class="pointer-events-none absolute inset-0 z-30"
    ></div>
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/media/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay (optional, for better readability) -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

    <!-- Content -->
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 mt-[-10px]"
    >
      <h1 class="text-4xl md:text-5xl font-bold pt-20">
        <img
          src="/src/assets/ov.png"
          alt=""
          class="w-24 h-24 md:w-48 md:h-48"
        />
      </h1>
      <p class="text-3xl md:text-4xl mt-10 font-khmer text-yellow-300">
        សូមគោរពអញ្ជើញ
      </p>
      <h3
        class="text-6xl md:text-6xl mt-20 font-khmer font-bold text-yellow-300"
      >
        ALL MY FRIENDS WITH HUNNI
      </h3>
      <button
        @click="onCtaClick"
        class="mt-20 px-20 py-6 text-4xl md:text-6xl bg-[#390058] border border-yellow-400 rounded-full text-yellow-400 font-khmer-kh animate-pulse scale-animation"
      >
        បើកធៀប
      </button>
      <div class="font-khmer pt-10 text-yellow-400 text-xl md:text-2xl">
        ចុចអេក្រង់ដើម្បីបើកធៀបអេឡិចត្រូនិច
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Lavishly+Yours&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;700&display=swap");

.font-khmer-kh {
  font-family: "Kantumruy Pro", sans-serif;
}

.font-khmer {
  font-family: "Koulen", serif;
}

@keyframes scaleUpDown {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.scale-animation {
  animation: scaleUpDown 2s infinite ease-in-out;
}

/* Magic star burst */
.star {
  position: absolute;
  left: calc(var(--x) - var(--size) / 2);
  top: calc(var(--y) - var(--size) / 2);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(
    circle,
    #fde047 0%,
    #facc15 60%,
    rgba(250, 204, 21, 0) 70%
  );
  border-radius: 50%;
  filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.8));
  animation: fly var(--dur) ease-out forwards, fade var(--dur) ease-out forwards;
}

@keyframes fly {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(var(--dx), var(--dy)) scale(0.6);
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
