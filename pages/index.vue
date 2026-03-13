<script setup lang="ts">
useHead({
  title: 'The Huntsman Sports Ground & Moorehead Way Development | Community',
  meta: [
    {
      name: 'description',
      content:
        'Community information about The Huntsman Sports Ground and Moorehead Way housing development. Find documents, submit objections, and stay informed.',
    },
  ],
})
</script>

<template>
  <div>
    <section class="bg-slate-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          The Huntsman Sports Ground & Moorehead Way Development 
        </h1>
        <h2>Manor Way and Brooklands Park - on the Blackheath Cator Estate</h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          A community-led information hub for residents concerned about the proposed housing
          development. Find key documents, submit objections to the planning authority, and stay
          up to date with the latest news.
        </p>

        <br />
        <p >
          This is the land at the bottom of Brooklands Park, where it joins Manor Way. It used to be known as the Huntsman Sports Ground. 
          The developer is refering to the site as the Moorehead Way development. 
        </p>
        <img src="/images/Ourmap.jpg" alt="Huntsman Sports Ground" class="w-full h-auto">

        <p>The developer wishes to build 258 homes on the site comprising of 61 one-bedroom homes, 36 small two-bedroom homes, 
          113 larger two-bedroom homes, 6 three-bedroom homes, 10 four-bedroom homes. There will be 8 blocks of flats, ranging from 4 to 6 stories
          high. The higher flats are on the eastern end adjacent to Moorefield way, and the lower properties face on to the Cator Estate.
          Thios would make it a high denisity building project. 
          </p>
      </div>
      <img src="/images/Mooreplan.jpg" alt="Huntsman Sports Ground" class="w-full h-auto">

    </section>

    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-slate-800 mb-8 text-center">Explore</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            to="/about"
            class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 class="text-xl font-semibold text-slate-800 mb-2">About us</h3>
            <p class="text-slate-600">
              Learn who we are and why we're working to inform our community about this
              development.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/documents"
            class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Documents</h3>
            <p class="text-slate-600">
              Planning documents, legal summaries, and key reference materials.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/letters"
            class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Letters</h3>
            <p class="text-slate-600">
              Pre-formatted letters to send to the planning authority. Add your details and
              submit your objection.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/news"
            class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 class="text-xl font-semibold text-slate-800 mb-2">News</h3>
            <p class="text-slate-600">Latest updates, meetings, and community developments.</p>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Contact</h3>
            <p class="text-slate-600">Get in touch by email or join our WhatsApp group.</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
