<template>
  <section id="home" class="w-full max-w-5xl">
    <!-- Title -->
    <h2 class="text-4xl md:text-6xl mt-8 font-khmer text-yellow-300 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
      សិរីមង្គលអាពាហ៍ពិពាហ៍
    </h2>

    <!-- Names row with central monogram -->
    <div class="mt-8 md:mt-10 font-khmer grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10">
      <!-- Groom -->
      <div class="order-2 md:order-1 text-center md:text-left">
        <div class="text-yellow-400 text-xl md:text-2xl font-khmer-kh">កូនប្រុសនាម</div>
        <div class="text-3xl md:text-5xl mt-4 md:mt-7">យឹម</div>
        <div class="text-3xl md:text-5xl mt-3 md:mt-6">បញ្ញា</div>
      </div>

      <!-- Monogram / emblem -->
      <div class="order-1 md:order-2 flex flex-col items-center justify-center">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-yellow-300 flex items-center justify-center">
          <span class="text-yellow-200 text-2xl md:text-3xl">♥</span>
        </div>
      </div>

      <!-- Bride -->
      <div class="order-3 text-center md:text-right">
        <div class="text-yellow-400 text-xl md:text-2xl font-khmer-kh">កូនស្រីនាម</div>
        <div class="text-3xl md:text-5xl mt-4 md:mt-7">ឃៀង</div>
        <div class="text-3xl md:text-5xl mt-3 md:mt-6">សៀវមី</div>
      </div>
    </div>

    <!-- Subheading and date -->
    <div class="text-yellow-300 text-xl md:text-2xl font-khmer-kh mt-8 md:mt-12">
      ដែលនឹងប្រព្រឹត្តទៅនៅ
    </div>
    <div class="text-3xl md:text-5xl mt-2 md:mt-4 font-khmer text-white home-text-shadow">
      ថ្ងៃព្រហស្បតិ៍ ទី២៦ ខែមិថុនា ឆ្នាំ២០២៥
    </div>

    <!-- Call to action: open map -->
    <a href="#location" class="gold-btn inline-flex items-center gap-2 mt-6 md:mt-8 px-6 py-3 rounded-full font-khmer-kh border-2">
      <span class="text-lg md:text-xl">បើកផែនទី</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3l-5.5 2-6-2-6.5 2.2v15.3l6.5-2.2 6 2 6.5-2.3v-15zm-12 1.5l5 1.7v12.3l-5-1.7v-12.3zm-5 1.6l3-1v12.3l-3 1v-12.3zm16 12.8l-3 1.1v-12.4l3-1v12.3z"/></svg>
    </a>

    <!-- Scroll indicator -->
    <div class="mt-10 md:mt-14 flex flex-col items-center text-yellow-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12z"/></svg>
    </div>
  </section>
</template>

<style scoped>
.home-text-shadow {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
}

.gold-btn {
  color: #1a1405;
  background: rgba(255, 204, 0, 0.15);
  border-color: #f5c84c;
  box-shadow:
    inset 0 0 12px rgba(255, 220, 120, 0.35),
    0 2px 8px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(245, 200, 76, 0.25);
  backdrop-filter: blur(1px);
  transition: all 200ms ease;
}
.gold-btn:hover {
  background: rgba(255, 220, 120, 0.22);
  box-shadow:
    inset 0 0 16px rgba(255, 230, 150, 0.5),
    0 3px 12px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(245, 200, 76, 0.35);
}
</style>
