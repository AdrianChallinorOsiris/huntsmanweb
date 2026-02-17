<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string[]
const path = `/news/${Array.isArray(slug) ? slug.join('/') : slug}`

const { data: article } = await useAsyncData(`news-${path}`, () =>
  queryCollection('news').where('_path', '==', path).first(),
)

if (!article.value) {
  throw createError({ statusCode: 404, message: 'Article not found' })
}

useHead({
  title: `${article.value?.title} | The Huntsman & Moorehead Way`,
  meta: [
    {
      name: 'description',
      content: article.value?.description || article.value?.title,
    },
  ],
})
</script>

<template>
  <article v-if="article" class="py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <time
        :datetime="article.date"
        class="text-sm text-slate-500 block mb-2"
      >
        {{ new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }}
      </time>
      <h1 class="text-3xl font-bold text-slate-800 mb-6">{{ article.title }}</h1>
      <div class="prose prose-slate max-w-none">
        <ContentRenderer :value="article" />
      </div>
      <NuxtLink
        to="/news"
        class="inline-flex items-center gap-2 mt-8 text-amber-600 hover:text-amber-700 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to news
      </NuxtLink>
    </div>
  </article>
</template>
