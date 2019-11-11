<template>
  <div class="landing-page">
    test
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .landing-page {
  font-family: ShermanSans, "Trebuchet MS", Tahoma, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: $su-primary-blue;
 }
</style>
