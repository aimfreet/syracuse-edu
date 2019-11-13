<template>
  <div class="page-header">
    <div class="branding">
      <logo />
      <span class="separater">|</span>
      <span class="abroad">Abroad</span>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
  .page-header {
    height: 67px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .branding {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    @media screen and (min-width: 1024px) {
      width: 1130px;
      display: flex;
      align-items: center;
    }
    .abroad {
      font-size: 1.65rem;
      color: #6f777d;
    }
    .separater {
      display: none;
      @media screen and (min-width: 1024px) {
      display: block;
      width: 0;
      height: 0.9em;
      margin: 0 0.7em;
      color: #767676;
      font-size: 2.4rem;
      line-height: 1;
      border: 0 solid #ccc;
      border-width: 0 1px;
      overflow: hidden;
      }
    }
  }
</style>
