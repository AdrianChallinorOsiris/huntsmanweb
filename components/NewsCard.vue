<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  date: string
  path: string
}>()

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>

<template>
  <NuxtLink
    :to="path"
    class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 group"
  >
    <time
      :datetime="date"
      class="text-sm text-slate-500 block mb-2"
    >
      {{ formatDate(date) }}
    </time>
    <h3 class="text-lg font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
      {{ title }}
    </h3>
    <p v-if="description" class="text-slate-600 text-sm line-clamp-2">
      {{ description }}
    </p>
  </NuxtLink>
</template>
