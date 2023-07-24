<script setup>
    import { ref, onMounted, reactive } from "vue";
    const dataProps = defineProps(['body']);

    const data = reactive({
        pages: []
    });

    onMounted(() => {
        if (dataProps.body) {
            data.pages = dataProps.body.map((item) => {
                let page = {};

                page['image'] = item.image.url;
                page['title'] = item.title[0].text;
                page['content'] = item.content[0].text;
                page['link'] = {
                    url: item.link.url
                }

                return page;
            });
        }
    })

    const title = ref('These three things help us deliver our mission to fix the digital divide')
</script>

<template>
  <section class="highlighted__section">
    <div class="gt__container">
        <h2>{{ title }}</h2>
        <div class="highlighted__call-to-actions">
            <div class="highlighted__call-to-action" v-for="(page, i) in data.pages" :key="i">
                <img class="highlighted__image" :src="page.image" />
                <div class="highlighted__content">
                    <div class="highlighted__title">
                        <h3>{{ page.title }}</h3>
                        <div class="highlighted__text">
                            <p>{{ page.content }}</p>
                        </div>
                    </div>
                    <a class="highlighted__link" :href="page.link.url">Read More <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

