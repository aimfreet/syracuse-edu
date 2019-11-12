<template>
  <div class="home">
    <landing-page />
  </div>
</template>

<script>

import LandingPage from '@/components/LandingPage.vue';

export default {
  name: 'Home',
  components: {
    LandingPage,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
