<template>
  <section id="details" class="w-full max-w-4xl mt-32 px-2">
    <!-- Heading -->
    <h2
      class="balance leading-tight text-center font-khmer text-yellow-300 text-[clamp(1.75rem,6vw,3.5rem)]"
    >
      សិរីមង្គលអាពាហ៍ពិពាហ៍
    </h2>

    <!-- Parents info, two columns (moved under heading) -->
    <div
      class="mt-6 grid grid-cols-2 gap-x-10 gap-y-4 sm:gap-x-14 sm:gap-y-6 md:gap-x-20 md:gap-y-8"
    >
      <!-- Groom's parents -->
      <div class="text-center">
        <div
          class="mt-3 space-y-1 font-khmer-kh text-[clamp(1.15rem,4vw,1.65rem)]"
        >
          <div class="text-yellow-400 font-semibold">លោក យឺម ឬទ្ធី</div>
          <div class="text-yellow-400 font-semibold">លោកស្រី អ៊ុន ភា</div>
        </div>
      </div>

      <!-- Bride's parents -->
      <div class="text-center">
        <div
          class="mt-3 space-y-1 font-khmer-kh text-[clamp(1.15rem,4vw,1.65rem)]"
        >
          <div class="text-yellow-400 font-semibold">លោក ឃៀង លាង</div>
          <div class="text-yellow-400 font-semibold">លោកស្រី ម៉ុន</div>
        </div>
      </div>
    </div>

    <!-- Invite paragraph -->
    <p
      class="mt-8 md:mt-10 text-yellow-300 font-khmer-kh text-center leading-relaxed text-[clamp(0.95rem,3.2vw,1.2rem)]"
    >
      សម្ដេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
      អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដី
      ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
    </p>

    <!-- Couple names (styled like parents), two columns -->
    <div
      class="mt-8 md:mt-10 grid grid-cols-2 gap-x-10 gap-y-2 sm:gap-x-14 md:gap-x-20"
    >
      <!-- Groom -->
      <div class="text-center">
        <div
          class="text-yellow-300 font-khmer-kh font-semibold text-[clamp(1rem,3.2vw,1.3rem)]"
        >
          កូនប្រុសនាម
        </div>
        <div
          class="mt-3 space-y-1 font-khmer-kh text-[clamp(1.05rem,3.4vw,1.35rem)]"
        >
          <div class="text-yellow-400 font-semibold">យឹម</div>
          <div class="text-yellow-400 font-semibold">បញ្ញា</div>
        </div>
      </div>

      <!-- Bride -->
      <div class="text-center">
        <div
          class="text-yellow-300 font-khmer-kh font-semibold text-[clamp(1rem,3.2vw,1.3rem)]"
        >
          កូនស្រីនាម
        </div>
        <div
          class="mt-3 space-y-1 font-khmer-kh text-[clamp(1.05rem,3.4vw,1.35rem)]"
        >
          <div class="text-yellow-400 font-semibold">ឃៀង</div>
          <div class="text-yellow-400 font-semibold">សៀវមី</div>
        </div>
      </div>
    </div>

    <!-- Date/Time/Location -->
    <div
      class="mt-10 text-yellow-400 font-khmer-kh space-y-2 leading-relaxed text-[clamp(1rem,3.5vw,1.3rem)]"
    >
      <div>ថ្ងៃចូលរៀបចំ ៖ សៅរ៍ ទី២៩ ខែវិច្ឆកា ឆ្នាំ២០២៥</div>
      <div>ម៉ោងអញ្ជើញភ្ញៀវ ៖ ៥:០០ ល្ងាច</div>
      <div>ទីតាំង ៖ ខេត្តតាកែវ</div>
    </div>

    <!-- Add to Calendar buttons -->
    <div
      class="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4"
    >
      <!-- Google Calendar -->
      <button
        @click="openGoogleCalendar"
        type="button"
        class="gold-btn inline-flex items-center gap-2 px-5 py-3 rounded-full font-khmer-kh border-2 border-yellow-300 text-white bg-yellow-300/15 backdrop-blur-sm hover:cursor-pointer text-[clamp(0.95rem,3.5vw,1.1rem)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm13 9H4v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8ZM5 9h14V6a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0V5H8v1a1 1 0 0 1-2 0V5H5a1 1 0 0 0-1 1v3Z"
          />
        </svg>
        <span>បន្ថែមទៅប្រតិទិន</span>
      </button>

      <!-- Download .ICS -->
      <button
        @click="downloadICS"
        type="button"
        class="gold-btn inline-flex items-center gap-2 px-5 py-3 rounded-full font-khmer-kh border-2 border-yellow-300 text-white bg-yellow-300/15 backdrop-blur-sm hover:cursor-pointer text-[clamp(0.95rem,3.5vw,1.1rem)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 8.707 10.293L11 12.586V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
          />
        </svg>
        <span>ទាញយក .ICS</span>
      </button>
    </div>
  </section>
</template>

<script setup>
// Add-to-Calendar logic for Details section
const title = "សិរីមង្គលអាពាហ៍ពិពាហ៍ — យឹម បញ្ញា & ឃៀង សៀវមី";
const details = "អញ្ជើញចូលរួមអបអរសាទរ ពិធីមង្គលមង្គលការរបស់យើង";
const locationText = "ខេត្តតាកែវ, កម្ពុជា";
// Based on the details above: 2025-11-29 at 17:00–20:00 (Asia/Phnom_Penh)
const startLocal = new Date("2025-11-30T17:00:00+07:00");
const endLocal = new Date("2025-11-30T20:00:00+07:00");

function toICSDate(d) {
  return d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function openGoogleCalendar() {
  const dates = `${toICSDate(startLocal)}/${toICSDate(endLocal)}`;
  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", title);
  url.searchParams.set("details", details);
  url.searchParams.set("location", locationText);
  url.searchParams.set("dates", dates);
  url.searchParams.set("ctz", "Asia/Phnom_Penh");
  window.open(url.toString(), "_blank");
}

function downloadICS() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Panha & Sievmy Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `DTSTART:${toICSDate(startLocal)}`,
    `DTEND:${toICSDate(endLocal)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${details}`,
    `LOCATION:${locationText}`,
    "UID:wedding-2025-11-29@panha-sievmy",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "wedding-2025-11-30.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
</script>
