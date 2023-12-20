<script setup lang="ts">
const links = [{
  label: 'À propos de nous',
  to: '#about-us',
  icon: 'i-heroicons-cube-transparent',
  exactHash: true
}, {
  label: 'Nos services',
  to: '#services',
  icon: 'i-heroicons-credit-card',
  exactHash: true
}, {
  label: 'Nos expertises métiers',
  to: '#features',
  icon: 'i-heroicons-academic-cap',
  exactHash: true
}, {
  label: 'Fondateurs',
  to: '#partners',
  icon: 'i-heroicons-question-mark-circle',
  exactHash: true
}
// {
//   label: 'Contact',
//   to: '#faq',
//   icon: 'i-heroicons-question-mark-circle',
//   exactHash: true
// }
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <NuxtImg src="/logo.png" alt="trust life sciences logo" width="40" height="40" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>
