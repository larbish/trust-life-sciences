<script setup lang="ts">
const links = [{
  label: 'À propos de nous',
  to: '#about-us',
  icon: 'i-mdi-account-circle',
  exactHash: true
}, {
  label: 'Nos services',
  to: '#services',
  icon: 'i-mdi-format-list-bulleted',
  exactHash: true
}, {
  label: 'Nos expertises métiers',
  to: '#features',
  icon: 'i-mdi-head-lightbulb-outline',
  exactHash: true
}, {
  label: 'Fondateurs',
  to: '#partners',
  icon: 'i-mdi-account-supervisor',
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
      <UAsideLinks :links="links" :ui="{ label: 'text-lg' }" />

      <!-- <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block /> -->
    </template>

    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UHeader>
</template>
