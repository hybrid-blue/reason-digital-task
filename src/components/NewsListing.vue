<script setup>
    import { ref, onMounted, reactive, computed } from "vue";

    const dataProps = defineProps(['body']);

    const data = reactive({
        posts: []
    });

    const featured = ref(null);

    onMounted(() => {
        if (dataProps.body) {
            data.posts = dataProps.body.map((item) => {
                let posts = {};

                const postDate = item.date.split('-');

                posts['image'] = item.image.url;
                posts['title'] = item.title[0].text;
                posts['content'] = item.content[0].text;
                posts['date'] = `${postDate[2]}/${postDate[1]}/${postDate[0]}`;
                posts['dateMeta'] = postDate;
                posts['tag'] = item.type;
                posts['link'] = {
                    url: item.link.url
                }

                return posts;
            });

            data.posts.sort((a, b) => {
                const dateA = new Date(a.dateMeta);
                const dateB = new Date(b.dateMeta);

                return dateB - dateA;
            })

            featured.value = data.posts[0];
        }
    })

    const filteredPosts = computed(() => {
        if (data.posts.length > 0) {
            return data.posts.filter((post, i) => i !== 0);
        }
        return data.posts;
    });

    const title = ref('Latest news and insights');
</script>

<template>
  <section class="news-listing__section">
    <div class="gt__container">
        <h2>{{ title }}</h2>
        <div class="news-listing__call-to-actions">
            <div class="news-listing__featured-call-to-action" v-if="featured">
                <div class="news-listing__call-to-action">
                    <img class="news-listing__image" :src="featured.image" />
                    <div class="news-listing__content">
                        <div>
                            <div class="news-listing__title">
                                <p>{{ featured.date }} · <span>{{ featured.tag }}</span></p>
                            </div>
                            <h3>{{ featured.title }}</h3>
                            <div class="news-listing__text">
                                <p>{{ featured.content }}</p>
                            </div>
                        </div>
                        <a class="news-listing__link" :href="featured.link.url">Read more <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
                    </div>
                </div>
            </div>
            <div class="news-listing__recent-call-to-action">
                <div class="news-listing__call-to-action" v-for="(post, i) in filteredPosts" :key="i">
                    <img class="news-listing__image" :src="post.image" />
                    <div class="news-listing__content">
                        <div>
                            <div class="news-listing__title">
                                <p>{{ post.date }} · <span>{{ post.tag }}</span></p>
                            </div>
                            <h3>{{ post.title }}</h3>
                            <div class="news-listing__text">
                                <p>{{ post.content }}</p>
                            </div>
                        </div>
                        <a class="news-listing__link" :href="post.link.url">Read more <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>