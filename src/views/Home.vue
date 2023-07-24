<script setup>
  import Promotional from '../components/Promotional.vue';
  import Insight from '../components/Insight.vue';
  import Hightlighted from '../components/Hightlighted.vue';
  import OurStories from '../components/OurStories.vue';
  import NewsListing from '../components/NewsListing.vue';
  import { ref, onMounted } from "vue";

  import { usePrismic } from "@prismicio/vue";

  const { client } = usePrismic();

  const data = ref({});

  onMounted(() => {
    data.value['news_and_insights'] = null;
    data.value['highlights'] = null;

    client.getByType('homee')
      .then((document) => {
        if (document) {
          if (document.results) {
            const res = document.results[0];

            res.data.body.forEach((slice) => {
              data.value[slice.slice_type] = slice.primary;
            });

            console.log(data.value);
          }
        } 
      });

      client.getByType('news_and_insights')
      .then((document) => {
        if (document) {
          if (document.results) {
            data.value['news_and_insights'] = [];
            const res = document.results;

            res.forEach((posts) => {
              data.value['news_and_insights'].push(posts.data);
            });
          }
        } 
      });

      client.getByType('highlights')
      .then((document) => {
        if (document) {
          if (document.results) {
            data.value['highlights'] = [];
            const res = document.results;

            res.forEach((posts) => {
              data.value['highlights'].push(posts.data);
            });

            console.log(data.value.highlights);
          }
        } 
      });
  })
</script>

<template>
  <Promotional v-if="data.promotional" :body="data.promotional" />
  <Insight v-if="data.insight" :body="data.insight" />
  <Hightlighted v-if="data.highlights" :body="data.highlights" />
  <OurStories v-if="data.ourstories" :body="data.ourstories" />
  <NewsListing v-if="data.news_and_insights" :body="data.news_and_insights" />
</template>
