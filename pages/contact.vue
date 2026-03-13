<script setup lang="ts">
import { reactive, ref } from 'vue'

const contactEmail = 'postmaster@osiris.co.uk'

const form = reactive({
  name: '',
  address: '',
  phone: '',
})

const isSubmitting = ref(false)
const submitError = ref<string | null>(null)
const submitSuccess = ref(false)

async function onSubmit() {
  isSubmitting.value = true
  submitError.value = null
  submitSuccess.value = false

  try {
    await $fetch('/api/join-whatsapp', {
      method: 'POST',
      body: {
        name: form.name,
        address: form.address,
        phone: form.phone,
      },
    })
    submitSuccess.value = true
    form.name = ''
    form.address = ''
    form.phone = ''
  } catch (err: unknown) {
    let message = 'Something went wrong. Please try again.'
    if (err && typeof err === 'object' && 'data' in err) {
      const data = (err as { data?: { message?: string } }).data
      if (data?.message) message = data.message
    } else if (err instanceof Error) {
      message = err.message
    }
    submitError.value = message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="py-12">
    <div class="container mx-auto px-4 max-w-2xl">
      <h1 class="text-3xl font-bold text-slate-800 mb-8">Contact us</h1>

      <div class="space-y-8">
        <div class="p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 class="text-xl font-semibold text-slate-800 mb-4">Join the WhatsApp group</h2>

          <p class="text-slate-600 mb-6">
            This WhatsApp group is run by local residents as a forum for sharing information and discussing concerns about the proposed developments in our area. The group aims to keep residents informed, allow people to exchange views, and coordinate community responses where appropriate. Participation is voluntary and members are expected to engage respectfully.
          </p>

          <div
            v-if="submitSuccess"
            class="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
          >
            Thank you. Your request has been sent. We will be in touch shortly.
          </div>

          <div
            v-if="submitError"
            class="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
          >
            {{ submitError }}
          </div>

          <form class="space-y-4" @submit.prevent="onSubmit">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="address" class="block text-sm font-medium text-slate-700 mb-1">Address</label>
              <textarea
                id="address"
                v-model="form.address"
                required
                rows="3"
                class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Your address"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-slate-700 mb-1">Phone number</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Your phone number"
              />
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Sending...' : 'Submit' }}
            </button>
          </form>

          <div class="mt-6 p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 space-y-3">
            <h3 class="font-semibold text-slate-800">Privacy Notice</h3>
            <p>
              By completing this form you consent to us using your personal data to add you to the campaign WhatsApp group.
            </p>
            <p>
              We will collect your name, phone number, and address. Your name and phone number will be used to add you to the WhatsApp group, where your phone number may be visible to other members of the group.
            </p>
            <p>
              Your address will only be used to confirm that you are a local resident. We will not retain or store address information after this validation has been completed.
            </p>
            <p>
              Your information will only be used for the purposes of administering this campaign group and will not be shared with third parties except as required to provide the WhatsApp group service.
            </p>
            <p>
              You may leave the WhatsApp group or request removal of your information at any time.
            </p>
            <p>
              The Huntsman & Moorehead Way campaign group is the data controller for this information.
            </p>
          </div>
        </div>

        <div class="p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 class="text-xl font-semibold text-slate-800 mb-2">Email</h2>
          <p class="text-slate-600 mb-2">
            This email is for website issues only, not for contact with the Huntsman campaign group. All contact with the Huntsman group should be via WhatsApp.
          </p>
          <a
            :href="`mailto:${contactEmail}`"
            class="text-amber-600 hover:text-amber-700 font-medium"
          >
            {{ contactEmail }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
