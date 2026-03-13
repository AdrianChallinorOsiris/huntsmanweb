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
          <li>
            <NuxtLink
              to="/about-the-proposals"
              class="hover:text-amber-400 transition-colors"
              active-class="text-amber-400 font-medium"
            >
              About the proposals
            </NuxtLink>
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
