<script setup>
const props = defineProps({
  timeLeft: { type: Object, required: true },
  isPast: { type: Boolean, required: true }
});
</script>

<template>
  <section id="countdown" class="w-full max-w-4xl mt-32 px-2">
    <h2 class="balance leading-tight text-center md:text-left font-khmer text-yellow-200 text-[clamp(1.75rem,6vw,3.5rem)]">
      Countdown
    </h2>
    <div class="mt-6 flex justify-center gap-4 md:gap-8">
      <div class="text-center min-w-[70px]">
        <div class="font-bold text-yellow-300 text-[clamp(2rem,10vw,4.5rem)]">{{ props.timeLeft.days }}</div>
        <div class="text-yellow-200 font-khmer-kh text-[clamp(0.9rem,3.5vw,1.25rem)]">Days</div>
      </div>
      <div class="text-center min-w-[70px]">
        <div class="font-bold text-yellow-300 text-[clamp(2rem,10vw,4.5rem)]">{{ props.timeLeft.hours }}</div>
        <div class="text-yellow-200 font-khmer-kh text-[clamp(0.9rem,3.5vw,1.25rem)]">Hours</div>
      </div>
      <div class="text-center min-w-[70px]">
        <div class="font-bold text-yellow-300 text-[clamp(2rem,10vw,4.5rem)]">{{ props.timeLeft.minutes }}</div>
        <div class="text-yellow-200 font-khmer-kh text-[clamp(0.9rem,3.5vw,1.25rem)]">Minutes</div>
      </div>
      <div class="text-center min-w-[70px]">
        <div class="font-bold text-yellow-300 text-[clamp(2rem,10vw,4.5rem)]">{{ props.timeLeft.seconds }}</div>
        <div class="text-yellow-200 font-khmer-kh text-[clamp(0.9rem,3.5vw,1.25rem)]">Seconds</div>
      </div>
    </div>
    <div v-if="props.isPast" class="mt-4 text-yellow-300 font-khmer-kh text-xl">ព្រឹត្តិការណ៍បានចាប់ផ្តើម/បញ្ចប់</div>
  </section>
</template>
