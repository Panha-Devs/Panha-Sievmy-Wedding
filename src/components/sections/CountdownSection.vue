<script setup>
const props = defineProps({
  timeLeft: { type: Object, required: true },
  isPast: { type: Boolean, required: true }
});
</script>

<template>
  <section id="countdown" class="w-full max-w-4xl mt-32">
    <h2 class="text-4xl md:text-6xl font-khmer text-yellow-200">
      Countdown
    </h2>
    <div class="mt-6 flex justify-center gap-4 md:gap-8">
      <div class="text-center min-w-[70px]">
        <div class="text-4xl md:text-7xl font-bold text-yellow-300">{{ props.timeLeft.days }}</div>
        <div class="text-yellow-200 font-khmer-kh text-base md:text-xl">Days</div>
      </div>
      <div class="text-center min-w-[70px]">
        <div class="text-4xl md:text-7xl font-bold text-yellow-300">{{ props.timeLeft.hours }}</div>
        <div class="text-yellow-200 font-khmer-kh text-base md:text-xl">Hours</div>
      </div>
      <div class="text-center min-w-[70px]">
        <div class="text-4xl md:text-7xl font-bold text-yellow-300">{{ props.timeLeft.minutes }}</div>
        <div class="text-yellow-200 font-khmer-kh text-base md:text-xl">Minutes</div>
      </div>
      <div class="text-center min-w-[70px]">
        <div class="text-4xl md:text-7xl font-bold text-yellow-300">{{ props.timeLeft.seconds }}</div>
        <div class="text-yellow-200 font-khmer-kh text-base md:text-xl">Seconds</div>
      </div>
    </div>
    <div v-if="props.isPast" class="mt-4 text-yellow-300 font-khmer-kh text-xl">ព្រឹត្តិការណ៍បានចាប់ផ្តើម/បញ្ចប់</div>
  </section>
</template>
