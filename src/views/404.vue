<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="not-found__section">
        <div class="gt__container">
            <h1>Page not found!</h1>
            <router-link to="/">Click here to return Home</router-link>
        </div>
    </section>
</template>