<script setup>
    import { ref, onMounted, reactive } from "vue";

    const dataProps = defineProps(['body']);
    const data = reactive({
      background: null,
      heading: null,
      content: null,
      link: {
        text: null,
        url: null
      }
    });

    const style = ref(null);

    onMounted(() => {
      if (dataProps.body) {
        data.background = dataProps.body.background.url;
        data.heading = dataProps.body.heading[0].text;
        data.content = dataProps.body.content[0].text;
        data.link = {
          text: dataProps.body.link_name[0].text,
          url: dataProps.body.link.url
        }
        style.value = {'--background': `url(${data.background})`};
      }
    })
</script>


<template>
  <section class="promotional__section" :style="style">
    <div class="gt__container">
      <div class="promotional__wrapper">
        <div class="promotional__title">
            <h1>{{ data.heading }}</h1>
        </div>
        <div class="promotional__text">
            <p>{{ data.content }}</p>
        </div>
        <a class="button button--no-border" :href="data.link.url">{{ data.link.text }}</a>
      </div>
    </div>
  </section>
</template>
