<template>
  <header class="bg-slate-800 text-white shadow-md">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <NuxtLink to="/" class="text-xl font-bold hover:text-amber-400 transition-colors">
          The Huntsman / Moorehead Way
        </NuxtLink>
        <ul class="flex flex-wrap gap-4 sm:gap-6">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-amber-400 transition-colors"
              active-class="text-amber-400 font-medium"
            >
              Home
            </NuxtLink>
          </li>
          <li
            class="relative"
            @mouseenter="openDropdown"
            @mouseleave="scheduleClose"
          >
            <button
              type="button"
              class="hover:text-amber-400 transition-colors flex items-center gap-1"
              :class="{ 'text-amber-400 font-medium': isAboutProposalsActive }"
              aria-haspopup="true"
              :aria-expanded="dropdownOpen"
              @click="dropdownOpen = !dropdownOpen"
            >
              About the proposals
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': dropdownOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              v-show="dropdownOpen"
              class="absolute left-0 top-full pt-2 -mt-2 min-w-[200px] bg-slate-700 rounded-md shadow-lg py-1 z-50"
              @mouseenter="openDropdown"
              @mouseleave="scheduleClose"
            >
              <li>
                <NuxtLink
                  to="/about-the-proposals/the-site"
                  class="block px-5 py-3 hover:bg-slate-600 hover:text-amber-400 transition-colors text-base"
                  active-class="bg-slate-600 text-amber-400"
                  @click="dropdownOpen = false"
                >
                  The site
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about-the-proposals/the-proposals"
                  class="block px-5 py-3 hover:bg-slate-600 hover:text-amber-400 transition-colors text-base"
                  active-class="bg-slate-600 text-amber-400"
                  @click="dropdownOpen = false"
                >
                  The proposals
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/why-object"
              class="hover:text-amber-400 transition-colors"
              active-class="text-amber-400 font-medium"
            >
              Why Object?
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/history-of-the-site"
              class="hover:text-amber-400 transition-colors"
              active-class="text-amber-400 font-medium"
            >
              History of the site
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="hover:text-amber-400 transition-colors"
              active-class="text-amber-400 font-medium"
            >
              About us
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dropdownOpen = ref(false)

const isAboutProposalsActive = computed(() =>
  route.path.startsWith('/about-the-proposals')
)

let closeTimeout: ReturnType<typeof setTimeout> | null = null

function openDropdown() {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  dropdownOpen.value = true
}

function scheduleClose() {
  closeTimeout = setTimeout(() => {
    dropdownOpen.value = false
    closeTimeout = null
  }, 200)
}
</script>
