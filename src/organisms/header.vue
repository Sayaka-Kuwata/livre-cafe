<template>
  <header class="header-contents c-flex">
    <h1>
      <nuxt-link to="/"
        >LIVRE
        <p>BOOK AND CAFE</p></nuxt-link
      >
    </h1>
    <nav class="nav-menu">
      <ul class="c-flex">
        <li><nuxt-link to="/">NEWS</nuxt-link></li>
        <li><nuxt-link to="/">FLOOR</nuxt-link></li>
        <li><nuxt-link to="/">DRINK</nuxt-link></li>
        <li><nuxt-link to="/">ACCESS</nuxt-link></li>
        <li><nuxt-link to="/">CONTACT</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted: function () {
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("header").addClass("shadow");
      } else {
        $("header").removeClass("shadow");
      }
    });
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.header-contents {
  width: 100%;
  position: fixed;
  padding: 10px 30px;
  h1 {
    @include global.font-60-bold;
    p {
      @include global.font-18-normal;
      text-align: center;
    }
  }
}

.nav-menu {
  width: 100%;
  ul {
    height: 90px;
  }
  li {
    @include global.font-20-bold;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}

.shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
</style>
