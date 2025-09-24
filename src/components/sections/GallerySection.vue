<template>
  <section id="gallery" class="w-full max-w-5xl mt-32 px-2">
    <h2
      class="balance leading-tight text-center md:text-left font-khmer text-yellow-200 text-[clamp(1.75rem,6vw,3.5rem)]"
    >
      វិភាពសាល
    </h2>
    <p
      class="mt-4 text-yellow-400 font-khmer-kh text-[clamp(1rem,3.5vw,1.25rem)]"
    >
      រូបភាពពីការរៀបចំ និងពិធីបុណ្យ
    </p>

    <!-- Photo Grid -->
    <div
      class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
    >
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
        @click="openLightbox(index)"
      >
        <div
          v-if="!photo.loaded"
          class="w-full h-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 border border-yellow-500/40 flex items-center justify-center"
        >
          <div class="animate-pulse">
            <svg
              class="w-8 h-8 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <img
          v-else
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          @load="photo.loaded = true"
        />

        <div
          class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
        >
          <svg
            class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl max-h-full">
          <img
            :src="photos[currentPhotoIndex]?.src"
            :alt="photos[currentPhotoIndex]?.alt"
            class="max-w-full max-h-full object-contain"
            @click.stop
          />

          <!-- Navigation -->
          <button
            @click.stop="prevPhoto"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg
              class="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click.stop="nextPhoto"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg
              class="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Close button -->
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg
              class="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

// Gallery data - add your photos here
const photos = ref([
  { src: "/src/assets/ov.png", alt: "Wedding Photo 1", loaded: false },
  { src: "/src/assets/heart.png", alt: "Wedding Photo 2", loaded: false },
  { src: "/src/assets/ov.png", alt: "Wedding Photo 3", loaded: false },
  { src: "/src/assets/heart.png", alt: "Wedding Photo 4", loaded: false },
  { src: "/src/assets/ov.png", alt: "Wedding Photo 5", loaded: false },
  { src: "/src/assets/heart.png", alt: "Wedding Photo 6", loaded: false },
]);

// Lightbox functionality
const lightboxOpen = ref(false);
const currentPhotoIndex = ref(0);

function openLightbox(index) {
  currentPhotoIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = "";
}

function nextPhoto() {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photos.value.length;
}

function prevPhoto() {
  currentPhotoIndex.value =
    currentPhotoIndex.value === 0
      ? photos.value.length - 1
      : currentPhotoIndex.value - 1;
}

// Keyboard navigation
function handleKeydown(e) {
  if (!lightboxOpen.value) return;

  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowRight":
      nextPhoto();
      break;
    case "ArrowLeft":
      prevPhoto();
      break;
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
