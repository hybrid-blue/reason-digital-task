<script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from "vue";
  import { useNavigationStore } from '../stores/navigation'; 
  const store = useNavigationStore();
  const navigation = ref(null);

  navigation.value = store.getPrimary();

  const showMobileMenu = ref(false); 
</script>

<template>
  <header>
    <div class="gt__container gt__container--top">
      <div class="gt__top-bar">
        <div class=" gt__top-bar-button gt__top-bar-search">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <span>Search</span>
        </div>
        <div class="gt__top-bar-options">
          <div class="gt__top-bar-button gt__top-bar-button--underline">Learn</div>
          <div class="gt__top-bar-button gt__top-bar-button--red">Donate</div>
        </div>
      </div>
    </div>
    <div class="gt__container gt__container--bottom">
      <div class="gt__container-inner">
        <nav>
          <div class="gt__header-logo">
            <RouterLink to="/"><img src="/src/assets/good-things-foundation-logo.png"></RouterLink>
          </div>
          <ul class="gt__navigation gt__desktop-nav">
            <li v-for="(nav, i) in navigation" :key="i">
              <RouterLink :to="nav.link"><span>{{ nav.name }}</span></RouterLink>
            </li>
          </ul>
          <div class="gt__mobile-nav">
            <button class="button button--red-background button--no-border" @click="showMobileMenu = true">
              <svg aria-hidden="true" class="icon standard-header__menu-icon" width="46" height="36" viewBox="0 0 46 36" xmlns="http://www.w3.org/2000/svg"><path d="M42.923 5.755H2.77a2.77 2.77 0 010-5.538h40.154a2.77 2.77 0 010 5.538zM35.146 20.77H2.77a2.77 2.77 0 010-5.54h32.386a2.77 2.77 0 010 5.54h-.009zM23.33 35.783H2.77a2.77 2.77 0 110-5.538h20.57a2.77 2.77 0 110 5.538h-.01z" fill="currentColor"></path></svg>
              <span>Menu</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <teleport to="#mobilemenu" v-if="showMobileMenu">
    <div class="gt__mobilemenu">
      <button class="button button--mobilemenu-close" @click="showMobileMenu = false">
        <span>Close</span>
        <svg aria-hidden="true" class="icon close-button-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M3.111 35.724a2.667 2.667 0 01-1.884-4.55l30-30a2.667 2.667 0 113.769 3.768l-30 30c-.5.5-1.178.782-1.885.782z"></path><path d="M33.102 35.724a2.667 2.667 0 01-1.884-.782l-30-30a2.667 2.667 0 113.769-3.769l30 30a2.667 2.667 0 01-1.885 4.551z"></path></g></svg>
      </button>
      <ul>
        <li v-for="(nav, i) in navigation" :key="i">
          <RouterLink @click="showMobileMenu = false" :to="nav.link">{{ nav.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </teleport>
</template>