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
        data.background = dataProps.body.image.url;
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
    <section class="insight__section">
      <div class="gt__container gt__container--full-width">
        <div class="insight__wrapper">
            <div class="insight__image" :style="style"></div>
            <div class="insight__content">
                <div class="insight__title">
                    <h2>{{ data.heading }}</h2>
                </div>
                <div class="insight__text">
                    <p>{{ data.content }}</p>
                </div>
                <a class="button button--no-border button--transparent-on-hover" :href="data.link.url">{{ data.link.text }}</a>
            </div>
        </div>
      </div>
    </section>
  </template>
