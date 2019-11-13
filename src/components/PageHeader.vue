<template>
  <div class="page-header">
    <div class="branding">
      <div class="logo">
        <a
          href="https://www.syracuse.edu"
          class="logo-link"
        ><logo /></a>
        <span class="separater">|</span>
        <a
          href="http://suabroad.syr.edu/"
          class="abroad-link"
        ><span class="abroad">Abroad</span></a>
      </div>
      <button class="header-menu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
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
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .abroad {
    font-size: 1.5rem;
    color: #6f777d;
    &:hover {
      color: $su-link-color;
      text-decoration: underline;
    }
  }
  .abroad-link {
    text-decoration: none;
  }
  .logo {
    padding: 1rem 0;
    @include flex-column;
    @media screen and (min-width: 1024px) {
      @include flex-row;
    }
    &-link {
      margin-top: 3px;
    }
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
  .branding {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    justify-content: space-between;
    @media screen and (min-width: 1024px) {
      width: 1130px;
      display: flex;
      align-items: center;
    }
  }
  .header-menu {
    background: transparent;
    border-right: none;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid $su-light-gray;
    padding: 2rem 1rem;
    font-size: 2rem;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
</style>
