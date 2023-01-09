<template>
  <header class="header-contents c-flex" id="Top">
    <h1>
      <nuxt-link to="/"
        >LIVRE
        <p>BOOK AND CAFE</p></nuxt-link
      >
    </h1>
    <div class="bar tb-only"><span></span><span></span><span></span></div>
    <nav class="nav-menu">
      <ul class="c-flex">
        <li><a v-scroll-to="'#News'">NEWS</a></li>
        <li><a v-scroll-to="'#Floor'">FLOOR</a></li>
        <li><a v-scroll-to="'#Drink'">DRINK</a></li>
        <li><a v-scroll-to="'#Access'">ACCESS</a></li>
        <li><a v-scroll-to="'#Contact'">CONTACT</a></li>
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

    $(".bar").click(function () {
      $(this).toggleClass("active");
      $(".nav-menu").toggleClass("panelactive");
    });

    $(".nav-menu").click(function () {
      $(".bar").removeClass("active");
      $(".nav-menu").removeClass("panelactive");
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
  background-color: var.$color-white;
  padding: 10px 30px 40px;
  z-index: 999;
  h1 {
    @include global.font-60-bold;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 0.2rem;
    p {
      @include global.font-18-normal;
      text-align: center;
      letter-spacing: 0;
    }
    &:hover {
      opacity: 0.7;
      transition: all 0.3s ease;
    }
  }
}

.nav-menu {
  width: 100%;
  ul {
    height: 90px;
  }
  li {
    @include global.font-22-bold;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 0.05rem;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    a {
      &:hover {
        opacity: 0.7;
        transition: all 0.3s ease;
      }
    }
  }
}

.shadow {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

@include global.media-query("tb") {
  .header-contents {
    padding: 15px 30px;
    h1 {
      @include global.font-40-bold;
      p {
        @include global.font-12-normal;
      }
    }
  }

  .bar {
    position: absolute;
    z-index: 9999;
    top: 20px;
    right: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    span {
      display: inline-block;
      transition: all 0.4s;
      position: absolute;
      height: 3px;
      border-radius: 2px;
      background-color: var.$color-primary;
      width: 35px;
      &:nth-child(1) {
        top: 15px;
      }
      &:nth-child(2) {
        top: 23px;
      }
      &:nth-child(3) {
        top: 31px;
      }
    }
  }

  .bar.active span {
    background-color: var.$color-white;
  }

  .bar.active span:nth-child(1) {
    top: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 35px;
  }

  .bar.active span:nth-child(2) {
    opacity: 0;
  }

  .bar.active span:nth-child(3) {
    top: 30px;
    transform: translateY(-6px) rotate(45deg);
    width: 35px;
  }

  .nav-menu {
    position: fixed;
    z-index: 999;
    top: 0;
    right: -120%;
    width: 70%;
    height: 100vh;
    height: 100dvh;
    background: #999;
    transition: all 0.6s;
  }

  .nav-menu.panelactive {
    right: 0;
  }

  .nav-menu {
    background-color: var.$color-primary;
    opacity: 0.8;
    ul {
      flex-direction: column;
      position: absolute;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    li {
      color: var.$color-white;
      padding: 10px;
      justify-content: center;
    }
  }
}

@include global.media-query("sp") {
  .header-contents {
    padding: 15px;
  }
  .nav-menu {
    ul {
      top: 20%;
      left: 50%;
      transform: translate(-50%, -20%);
    }
  }
}
</style>
