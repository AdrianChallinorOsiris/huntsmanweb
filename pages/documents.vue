<script setup lang="ts">
import { documents } from '~/data/documents'

useHead({
  title: 'Documents | The Huntsman & Moorehead Way',
  meta: [
    {
      name: 'description',
      content:
        'Planning documents, legal summaries, and key reference materials for The Huntsman Sports Ground and Moorehead Way development.',
    },
  ],
})
</script>

<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-slate-800 mb-2">Documents</h1>
      <p class="text-slate-600 mb-8 max-w-2xl">
        Key planning documents, legal summaries, and reference materials relating to The Huntsman
        Sports Ground and Moorehead Way development.
      </p>

      <div v-if="documents?.length" class="grid md:grid-cols-2 gap-6">
        <DocumentCard
          v-for="doc in documents"
          :key="doc.id"
          :title="doc.title"
          :summary="doc.summary"
          :url="doc.url"
          :type="doc.type"
        />
      </div>

      <div
        v-else
        class="p-8 bg-slate-50 rounded-lg border border-slate-200 text-center text-slate-600"
      >
        <p>No documents have been added yet. Check back soon.</p>

        <p class="text-sm mt-2">
          To add documents, edit <code class="bg-slate-200 px-1 rounded">data/documents.ts</code>
        </p>
      </div>
    </div>
  </div>
</template>
