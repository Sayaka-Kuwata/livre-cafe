<template>
  <section class="mv">
    <div class="mv-contents c-flex">
      <div class="mv-left-text">
        <p>これからの街の本屋</p>
      </div>
      <div class="mv-capture">
        <img src="@/assets/images/mv/mv01.png" />
        <img src="@/assets/images/mv/mv02.png" />
        <img src="@/assets/images/mv/mv03.png" />
      </div>
      <div class="mv-right-text">
        <p>偶然の出会いを探す</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainVisual",
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.mv {
  padding: 140px 0 100px;

  p {
    @include global.font-20-normal(var.$color-black);
    writing-mode: vertical-rl;
    letter-spacing: 0.6rem;
    flex: 1;
  }
}

.mv-contents {
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 600px;
}

.mv-left-text {
  grid-column: 1/2;
}

.mv-capture {
  grid-column: 2/3;
  width: 100%;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: -20px 0px;
    position: absolute;
    left: 0;
    opacity: 0;
    animation: mv-animation 9s infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 3s;
    }
    &:nth-child(3) {
      animation-delay: 6s;
    }
  }
}

@keyframes mv-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.mv-right-text {
  grid-column: 3/4;
}

.mv-left-text,
.mv-right-text {
  display: grid;
  justify-items: center;
  align-items: center;
}

@include global.media-query("sp") {
  .mv {
    padding: 90px 0 80px;
    p {
      font-size: 18px;
      letter-spacing: 0.4rem;
    }
  }

  .mv-capture {
    img {
      object-position: 50%;
    }
  }

  .mv-left-text,
  .mv-right-text {
    padding: 0 10px;
  }
}

@include global.media-query("sp-small") {
  .mv-contents {
    grid-template-rows: 480px;
  }

  .mv-capture {
    img {
      height: 480px;
    }
  }
}

@include global.media-query("sp-extra-small") {
  .mv-contents {
    grid-template-rows: 350px;
  }

  .mv-capture {
    img {
      height: 350px;
    }
  }
}
</style>
