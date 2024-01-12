<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Landing',
  title: page.value.title,
  description: page.value.description
})

const form = reactive({
  name: undefined,
  email: undefined,
  phone: undefined,
  message: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.phone) errors.push({ path: 'phone', message: 'Required' })
  if (!state.message) errors.push({ path: 'message', message: 'Required' })

  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <div>
    <ULandingHero :description="page.hero.description" :ui="{ description: 'text-3xl', container: 'gap-16 sm:gap-y-12' }">
      <template #title>
        <span class="text-primary">TRUST</span> Life Sciences
      </template>

      <div class="flex justify-center my-5">
        <NuxtImg class="rounded-xl" src="/logo.png" alt="trust life sciences logo" width="200" height="200" />
      </div>

      <div class="flex justify-center w-full gap-x-6 gap-y-3 px-6">
        <UButton label="Qui sommes nous ?" size="xl" to="/#about-us" />
        <UButton label="Contactez nous" size="xl" icon="i-heroicons-phone" color="white" to="/#contact" />
      </div>
    </ULandingHero>

    <ULandingSection
      id="about-us"
      :title="page.about.title"
      :features="[{
        name: page.about.who.title,
        description: page.about.who.description,
        icon: page.about.who.icon
      }, {
        name: page.about.what.title,
        description: page.about.what.description,
        icon: page.about.what.icon
      }]"
      align="right"
    >
      <template #title>
        <div>
          À propos de <span class="text-primary">nous</span>
        </div>
      </template>
      <NuxtImg
        :src="page.about.img"
        alt="Champs de Mars avec vue sur Tour Eiffel"
        width="576"
        height="384"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </ULandingSection>

    <ULandingSection
      id="services"
      :title="page.services.title"
      :description="page.services.description"
    >
      <template #title>
        <div>
          Nos <span class="text-primary">Services</span>
        </div>
      </template>
      <div class="flex flex-col sm:flex-row gap-4">
        <ULandingCard
          v-for="item in page.services.items"
          :key="item.title"
          :ui="{ title: 'text-xl' }"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          color="primary"
          orientation="horizontal"
        >
          <NuxtImg
            :src="item.img"
            :alt="item.alt"
            width="260"
            height="180"
            class="w-full rounded-md"
          />
        </ULandingCard>
      </div>
    </ULandingSection>

    <ULandingSection
      id="features"
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
    >
      <template #title>
        Nos <span class="text-primary">Expertises </span> Métiers
      </template>
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8' }">
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      id="partners"
      :description="page.partners.description"
      align="left"
    >
      <template #title>
        Co-<span class="text-primary">fondateurs </span>
      </template>
      <template #description>
        <div class="italic">
          "{{ page.partners.description }}"
          <div class="flex justify-end font-medium text-md mt-4">
            Virginie Lleu &nbsp; & &nbsp; Matthieu Langrenay
          </div>
        </div>
      </template>
      <div class="flex justify-center">
        <div class="flex flex-col gap-10">
          <NuxtImg
            class="rounded-md grayscale shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
            :src="page.partners.imgOne"
            alt="Premier cofondateur de Trust Life Sciences"
            width="200"
            height="200"
          />
          <NuxtImg
            class="rounded-md grayscale shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
            :src="page.partners.imgTwo"
            alt="Deuxième cofondateur de Trust Life Sciences"
            width="200"
            height="200"
          />
        </div>
      </div>
    </ULandingSection>

    <!-- <ULandingSection :ui="{ title: 'sm:!text-3xl' }">
      <template #title>
        Ils nous font <span class="text-primary">confiance</span>
      </template>
      <ULandingLogos align="center">
        <NuxtImg src="/servier.png" height="50" />
        <NuxtImg src="/roche.png" height="50" />
        <NuxtImg src="/astellas.png" height="50" />
        <NuxtImg src="/ipsen.png" height="50" />
        <NuxtImg src="/LFB.png" height="50" />
      </ULandingLogos>
    </ULandingSection> -->


    <!-- <ULandingSection title="Nous contacter">
      <div class="flex justify-center">
        <UForm :validate="validate" :state="form" class="w-1/2 space-y-4" @submit="onSubmit">
          <UFormGroup label="Votre nom" name="name">
            <UInput v-model="form.name" placeholder="Jean Dupond" icon="i-heroicons-user" size="lg" />
          </UFormGroup>
          <UFormGroup label="Your email" name="email">
            <UInput v-model="form.email" placeholder="you@example.com" icon="i-heroicons-envelope" size="lg" />
          </UFormGroup>
          <UFormGroup label="Votre téléphone" name="phone">
            <UInput v-model="form.phone" placeholder="0612345678" icon="i-heroicons-phone" size="lg" />
          </UFormGroup>
          <UFormGroup name="message" label="Message">
            <UTextarea v-model="form.message" />
          </UFormGroup>

          <div>
            <UButton type="submit" class="mt-4" label="Envoyer" size="xl" />
          </div>
        </UForm>
      </div>
    </ULandingSection> -->
  </div>
</template>
