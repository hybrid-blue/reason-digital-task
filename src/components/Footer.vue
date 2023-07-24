<script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from "vue";
  import { useNavigationStore } from '../stores/navigation'; 
  const store = useNavigationStore();

  const footerNav = ref(null);
  const legalNav = ref(null);
  const quickLinks = ref(null);
  const socials = ref(null);

  footerNav.value = store.getFooter();
  legalNav.value = store.getLegal();
  quickLinks.value = store.getQuickLinks();
  socials.value = store.getSocials();

</script>

<template>
  <footer>
    <div class="gt__container">
      <div class="gt__footer-top-section">
        <div>
          <h2>Fix the Digital Divide - for Good</h2>
          <P>We have developed a comprehensive service for digitally excluded people. An offer which any local organisation – anywhere in the UK – can use to Fix the Digital Divide in their communities.</P>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul>
            <li v-for="(nav, i) in quickLinks" :key="i"><RouterLink :to="nav.link">{{ nav.name }}</RouterLink></li>
          </ul>
        </div>
        <div>
          <h2>Connect with us</h2>
          <ul class="gt__footer-social-links">
            <li v-for="(nav, i) in socials" :key="i"><a :href="nav.link">{{ nav.name }}</a></li>
          </ul>
        </div>
        <div>
          <h2>Stay in touch</h2>
          <P>Keep up-to-date with the latest events and news from Good Things Foundation in our monthly newsletter.</P>
          <a class="gt__footer-button button">Sign up for email updates</a>
        </div>
      </div>
      <div class="gt__footer-middle-section">
        <div>
          <h2>We make these good things happen</h2>
          <ul>
            <li v-for="(nav, i) in footerNav" :key="i"><RouterLink :to="nav.link">{{ nav.name }}</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="gt__footer-bottom-section">
        <div class="gt__footer-bottom-section-inner">
          <div class="gt__additional-infomation">
            <ul>
              <li v-for="(nav, i) in legalNav" :key="i"><RouterLink :to="nav.link">{{ nav.name }}</RouterLink></li>
            </ul>
          </div>
          <div class="gt__footer-copyright">
            Copyright 2021 © Good Things Foundation. A registered charity in England and Wales (1165209).
          </div>
        </div>
        <div class="get__footer-website-by">
          Website by <a href="#">Reason Digital</a>
        </div>
      </div>
    </div>
  </footer>
</template>
