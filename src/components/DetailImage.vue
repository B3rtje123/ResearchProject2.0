<template>
    <section class="block mt-20 md:hidden">
        <!-- image -->
        <div class="mx-4 h-fit overflow-hidden drop-shadow-xl">
            <img
                :src="image"
                :alt="`${title} - cover`"
                aria-hidden="true"
                class="object-cover h-80 w-full rounded-2xl"
                :style="{ 'view-transition-name': `record-${id}` }"
            />
        </div>
    </section>
    <section class="hidden mt-20 md:flex md:flex-col mx-4">
        <img
            :src="image"
            :alt="`${title} - cover`"
            aria-hidden="true"
            class="object-cover h-80 w-full rounded-2xl xl:h-[700px]"
            :style="{ 'view-transition-name': `record-${id}` }"
        />
    </section>
  
    </template>
  
    <script lang="ts">
    export default {
      props: {
        id: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
      },
    };
    </script>