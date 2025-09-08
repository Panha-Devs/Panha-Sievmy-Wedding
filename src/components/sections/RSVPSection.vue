<script setup>
const props = defineProps({
  modelValue: { type: Object, required: true },
  email: { type: String, required: true }
});
const emit = defineEmits(["update:modelValue"]);

function updateField(key, value) {
  emit("update:modelValue", { ...props.modelValue, [key]: value });
}

function submit(email, value) {
  const subject = encodeURIComponent("Wedding RSVP");
  const body = encodeURIComponent(
    `Name: ${value.name}\nAttending: ${value.attending}\nMessage: ${value.message}`
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
</script>

<template>
  <section id="rsvp" class="w-full max-w-3xl mt-32 text-left px-2">
    <h2 class="balance leading-tight text-center font-khmer text-yellow-200 text-[clamp(1.75rem,6vw,3.5rem)]">
      RSVP
    </h2>
    <form @submit.prevent="submit(props.email, props.modelValue)" class="mt-8 grid grid-cols-1 gap-3 md:gap-4 text-black text-[clamp(1rem,3.5vw,1.125rem)]">
      <input :value="props.modelValue.name" @input="e=>updateField('name', e.target.value)" type="text" placeholder="ឈ្មោះ / Name"
        class="rounded px-3 py-3 outline-none border border-yellow-500/50" required />
      <select :value="props.modelValue.attending" @change="e=>updateField('attending', e.target.value)" class="rounded px-3 py-3 outline-none border border-yellow-500/50" required>
        <option :value="'yes'">ចូលរួម (Yes)</option>
        <option :value="'no'">មិនចូលរួម (No)</option>
      </select>
      <textarea :value="props.modelValue.message" @input="e=>updateField('message', e.target.value)" rows="4" placeholder="សារ / Message (ជាចំណូលចិត្ត)"
      class="rounded px-3 py-3 outline-none border border-yellow-500/50"></textarea>
      <button type="submit" class="self-start bg-yellow-500 text-black font-khmer-kh px-4 py-2 rounded">
        ផ្ញើ RSVP
      </button>
    </form>
  <p class="mt-3 text-yellow-300 font-khmer-kh text-center text-[clamp(0.9rem,3vw,1rem)]">
      ឬទាក់ទងតាមទូរស័ព្ទ/បណ្តាញសង្គម ដែលអ្នកស្គាល់
    </p>
  </section>
</template>
