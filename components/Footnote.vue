<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

const props = defineProps<{
  text: string
}>()

const isOpen = ref(false)
const modalRef = ref<HTMLElement | null>(null)

watch(isOpen, (open) => {
  if (open) {
    nextTick(() => modalRef.value?.focus())
  }
})

const formattedText = computed(() => {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return props.text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-amber-600 hover:text-amber-700 underline break-all">${url}</a>`
  })
})

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}
</script>

<template>
  <span class="inline">
    <button
      type="button"
      class="inline-flex items-center justify-center text-amber-600 hover:text-amber-700 font-medium cursor-pointer align-baseline text-sm ml-0.5"
      aria-label="View footnote"
      @click="open"
    >
      <slot>†</slot>
    </button>

    <Teleport to="body">
      <Transition name="footnote">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @keydown="handleKeydown"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
            @click="close"
          />

          <!-- Modal -->
          <div
            ref="modalRef"
            tabindex="-1"
            class="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] flex flex-col outline-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="footnote-title"
          >
            <!-- Header with close button -->
            <div class="flex items-center justify-end p-3 border-b border-slate-200 shrink-0">
              <button
                type="button"
                class="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close footnote"
                @click="close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-2.72 2.72a.75.75 0 101.06 1.06L10 11.06l2.72 2.72a.75.75 0 101.06-1.06L11.06 10l2.72-2.72a.75.75 0 00-1.06-1.06L10 8.94 7.28 6.22z"
                  />
                </svg>
              </button>
            </div>

            <!-- Scrollable content -->
            <div
              id="footnote-title"
              class="overflow-y-auto p-4 text-slate-600 text-sm leading-relaxed"
              v-html="formattedText"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<style scoped>
.footnote-enter-active,
.footnote-leave-active {
  transition: opacity 0.2s ease;
}
.footnote-enter-from,
.footnote-leave-to {
  opacity: 0;
}
.footnote-enter-active .relative,
.footnote-leave-active .relative {
  transition: transform 0.2s ease;
}
.footnote-enter-from .relative,
.footnote-leave-to .relative {
  transform: scale(0.95);
}
</style>
