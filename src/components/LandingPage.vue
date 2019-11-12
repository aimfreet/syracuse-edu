<template>
  <div class="landing-page">
    <page-header />
    <hero-banner />
    <info-cards />
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue';
import HeroBanner from './HeroBanner.vue';
import InfoCards from './InfoCards.vue';

export default {
  name: 'LandingPage',
  components: {
    HeroBanner,
    InfoCards,
    PageHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .landing-page {
  font-family: ShermanSans, "Trebuchet MS", Tahoma, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: $su-dark-gray;
  width: 100%;
 }
</style>
