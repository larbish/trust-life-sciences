<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogSiteName: 'TRUST Life Sciences - Cabinet de conseil et recrutement',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <Header />

  <UMain>
    <NuxtPage />

    <UNotifications />
  </UMain>

  <Footer />
</template>
