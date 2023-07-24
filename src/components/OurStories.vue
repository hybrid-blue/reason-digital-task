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
  <section class="our-stories__section" :style="style">
    <div class="gt__container">
        <div class="our-stories__content-wrapper">
            <div class="our-stories__content">
                <h2 class="our-stories__title">"{{ data.content }}"</h2>
                <a class="button button--red-background button--no-border" :href="data.link.url">{{ data.link.text }}</a>
            </div>
        </div>
    </div>
  </section>
</template>
