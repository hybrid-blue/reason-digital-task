<script setup>
  import { ref, onMounted } from "vue";
  import { usePrismic } from "@prismicio/vue";

  const { client } = usePrismic();

  const title = ref(null);
  const content = ref(null);

  onMounted(() => {
    client.getByType('the_digital_divide')
      .then((document) => {
        if (document) {
          if (document.results) {
            const res = document.results[0];

            title.value = res.data.title[0].text;
            content.value = res.data.content[0].text;
          }
        } 
      });
  })
</script>

<template>
  <section class="the-digital-divide__section">
    <div class="gt__container">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </section>
</template>

<style scope>
  .the-digital-divide__section {
    margin: 2em 0;
  }

  h1 {
    margin: 0 0 0.5em 0;
  }
</style>