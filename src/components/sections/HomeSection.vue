<template>
  <section id="home" class="w-full max-w-6xl">
    <!-- Title -->
  <h2 class="balance leading-tight mt-6 md:mt-8 text-center font-khmer text-yellow-300 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] text-[clamp(1.75rem,6vw,3.5rem)]">
      សិរីមង្គលអាពាហ៍ពិពាហ៍
    </h2>

    <!-- Names row with central monogram -->
  <div class="mt-8 md:mt-10 font-khmer grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 md:gap-14 lg:gap-24 xl:gap-32 2xl:gap-40">
      <!-- Groom -->
  <div class="text-center pr-3 md:pr-10 lg:pr-14 xl:pr-20 2xl:pr-24">
        <div class="text-yellow-400 font-khmer-kh text-[clamp(1rem,3.2vw,1.5rem)]">កូនប្រុសនាម</div>
        <div class="leading-tight mt-4 md:mt-7 text-[clamp(1.75rem,5.5vw,3rem)]">យឹម</div>
        <div class="leading-tight mt-3 md:mt-6 text-[clamp(1.75rem,5.5vw,3rem)]">បញ្ញា</div>
      </div>

      <!-- Monogram / emblem -->
      <div class="flex flex-col items-center justify-center my-1 md:my-0">
        <div class="rounded-full border-2 border-yellow-300 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28">
          <span class="text-yellow-200 text-[clamp(1.25rem,3.5vw,1.75rem)] md:text-3xl">♥</span>
        </div>
      </div>

    <!-- Bride -->
  <div class="text-center pl-3 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-24">
        <div class="text-yellow-400 font-khmer-kh text-[clamp(1rem,3.2vw,1.5rem)]">កូនស្រីនាម</div>
        <div class="leading-tight mt-4 md:mt-7 text-[clamp(1.75rem,5.5vw,3rem)]">ឃៀង</div>
        <div class="leading-tight mt-3 md:mt-6 text-[clamp(1.75rem,5.5vw,3rem)]">សៀវមី</div>
      </div>
    </div>

    <!-- Subheading and date -->
  <div class="text-yellow-300 font-khmer-kh mt-10 md:mt-14 text-[clamp(1rem,3.5vw,1.5rem)]">
      ដែលនឹងប្រព្រឹត្តទៅនៅ
    </div>
  <div class="balance leading-snug mt-4 md:mt-6 font-khmer text-white home-text-shadow text-[clamp(1.5rem,5.5vw,3rem)]">
      ថ្ងៃព្រហស្បតិ៍ ទី២៦ ខែមិថុនា ឆ្នាំ២០២៥
    </div>

    <!-- Call to action: open map -->
  <a href="#location" class="gold-btn inline-flex items-center gap-2 mt-8 md:mt-10 px-6 py-3 rounded-full font-khmer-kh border-2 mx-auto text-[clamp(1rem,3.5vw,1.25rem)]">
      <span>បើកផែនទី</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3l-5.5 2-6-2-6.5 2.2v15.3l6.5-2.2 6 2 6.5-2.3v-15zm-12 1.5l5 1.7v12.3l-5-1.7v-12.3zm-5 1.6l3-1v12.3l-3 1v-12.3zm16 12.8l-3 1.1v-12.4l3-1v12.3z"/></svg>
    </a>

  </section>
</template>

<style scoped>
.home-text-shadow {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
}

.gold-btn {
  color: #ffffff;
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
