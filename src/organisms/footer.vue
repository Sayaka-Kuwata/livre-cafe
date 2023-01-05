<template>
  <footer>
    <div class="footer-logo">
      <p>LIVRE<span>BOOK AND CAFE</span></p>
      <ul class="c-flex">
        <li>
          <a href="#"><img src="@/assets/images/logo/instagram-logo.svg" /></a>
        </li>
        <li>
          <a href="#"><img src="@/assets/images/logo/facebook-logo.png" /></a>
        </li>
      </ul>
      <address>
        〒180-0003 東京都武蔵野市吉祥寺南町3-8-1-105<span
          >TEL 03-1234-5678</span
        >
      </address>
      <p class="copyright">©2023 LIVRE, All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

footer {
  background-color: var.$color-primary;
  padding-top: 96px;
  padding-bottom: 32px;
}

.footer-logo {
  p {
    @include global.font-60-bold(var.$color-white);
    font-family: "Exo 2", sans-serif;
    letter-spacing: 0.2rem;
    width: fit-content;
    margin: 0 auto 72px;
    span {
      display: block;
      @include global.font-18-normal(var.$color-white);
      letter-spacing: 0;
      text-align: center;
    }
  }

  ul {
    gap: 50px;
    margin-bottom: 72px;
  }

  li {
    width: 40px;
  }

  address {
    @include global.font-15-normal(var.$color-white);
    letter-spacing: 0.08rem;
    text-align: center;
    margin-bottom: 54px;
    span {
      margin-left: 15px;
    }
  }
  .copyright {
    @include global.font-10-normal(var.$color-white);
    font-family: YuGothic, "Yu Gothic", sans-serif;
    margin-bottom: 0;
  }
}
</style>
