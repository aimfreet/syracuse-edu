<template>
  <div class="landing-page">
    <hero-banner />
  </div>
</template>

<script>
import HeroBanner from './HeroBanner.vue';


export default {
  name: 'LandingPage',
  components: {
    HeroBanner,

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
