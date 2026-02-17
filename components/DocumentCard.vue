<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  url: string
  type?: string
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 group"
  >
    <h3 class="text-lg font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
      {{ title }}
    </h3>
    <p class="text-slate-600 text-sm mb-4 line-clamp-3">{{ summary }}</p>
    <span
      class="inline-flex items-center gap-2 text-sm font-medium text-amber-600 group-hover:text-amber-700"
    >
      <span>View document</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </span>
  </a>
</template>
