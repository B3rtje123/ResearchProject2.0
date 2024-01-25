<template>
  <section class="">
    <div class="shadow-xl rounded-lg mr-32 w-72">
      <img
        :src="image"
        :alt="`${title} - cover`"
        aria-hidden="true"
        class="block w-72 h-72  object-cover rounded-lg"
        :style="{ 'view-transition-name': `record-${id}` }"
      />
    </div>
  </section>

  </template>
  
  <script lang="ts">
  import { supabase } from '~/lib/supabase';

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
      price: {
        type: Number,
        required: true,
      },
      consoles: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  