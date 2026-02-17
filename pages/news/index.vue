<script setup lang="ts">
useHead({
  title: 'News | The Huntsman & Moorehead Way',
  meta: [
    {
      name: 'description',
      content:
        'Latest news and updates about The Huntsman Sports Ground and Moorehead Way development.',
    },
  ],
})

const { data: newsList } = await useAsyncData('news-list', () =>
  queryCollection('news').sort({ date: -1 }).all(),
)
</script>

<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-slate-800 mb-2">News</h1>
      <p class="text-slate-600 mb-8 max-w-2xl">
        Latest updates, meetings, and developments regarding The Huntsman Sports Ground and Moorehead
        Way.
      </p>

      <div v-if="newsList?.length" class="grid md:grid-cols-2 gap-6">
        <NewsCard
          v-for="item in newsList"
          :key="item._path"
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :path="item._path"
        />
      </div>

      <div
        v-else
        class="p-8 bg-slate-50 rounded-lg border border-slate-200 text-center text-slate-600"
      >
        <p>No news items yet. Check back soon.</p>
      </div>
    </div>
  </div>
</template>
