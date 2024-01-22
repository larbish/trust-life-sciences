<template>
  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Made with <a class="font-bold underline" target="_blank" href="https://ui.nuxt.com/pro">UI Pro</a>
      </p>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>
