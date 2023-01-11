<template>
  <section>
    <FadeIncomponent>
      <div class="for-biginner">
        <p>はじめてご利用の方へ</p>
      </div>
    </FadeIncomponent>

    <div class="biginner-detail">
      <FadeIncomponent>
        <span>Let's have fun!</span>
      </FadeIncomponent>
      <FadeIncomponent>
        <div class="biginner-detail-inner c-flex">
          <div class="biginner-detail-text">
            <p>
              LIVREではドリンクを販売しています。<br />購入しなくても店内であれば飲み物を飲みながらご自由に本を読んで頂いて構いません。<br />各フロアにテーブルもご用意しておりますので、たまには時間を忘れ、ゆったりとしたひと時をお楽しみください。
            </p>
          </div>
          <div class="biginner-detail-image">
            <img src="@/assets/images/figure/biginner.png" />
          </div>
        </div>
      </FadeIncomponent>
    </div>
  </section>
</template>

<script>
import FadeIncomponent from "@/atoms/fade-in";

export default {
  name: "Biginner",
  components: {
    FadeIncomponent,
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.for-biginner {
  background-color: var.$color-white-smoke;
  padding: 50px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -15px;
    border: 25px solid transparent;
    border-top: 25px solid var.$color-white-smoke;
  }
  p {
    @include global.font-30-bold(var.$color-black);
    letter-spacing: 0.1rem;
    text-align: center;
  }
}

.biginner-detail {
  background-color: var.$color-secondary;
  padding: 75px 0 50px;
  span {
    @include global.font-30-bold(var.$color-white);
    display: block;
    font-family: "Exo 2", sans-serif;
    text-align: center;
    letter-spacing: 0.05rem;
    margin-bottom: 32px;
  }
}

.biginner-detail-inner {
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;
}

.biginner-detail-text {
  flex: 1;
  display: flex;
  align-items: center;
}

.biginner-detail-text {
  p {
    @include global.font-20-normal(var.$color-black);
    letter-spacing: 0.05rem;
    line-height: 1.4;
    text-align: justify;
    text-justify: inter-ideograph;
  }
}

.biginner-detail-image {
  max-width: 520px;
}

@include global.media-query("pc-sp") {
  .biginner-detail-inner {
    padding: 80px;
  }

  .biginner-detail-image {
    max-width: 450px;
  }
}

@include global.media-query("tb") {
  .biginner-detail {
    padding: 75px 0 80px;
  }

  .biginner-detail-inner {
    flex-direction: column-reverse;
  }

  .biginner-detail-inner {
    gap: 32px;
    padding: 32px 80px 0;
  }

  .biginner-detail-image,
  .biginner-detail-text {
    max-width: 620px;
    margin: 0 auto;
  }
}

@include global.media-query("sp") {
  .for-biginner {
    padding: 35px;
    &::before {
      border: 15px solid transparent;
      border-top: 15px solid var.$color-white-smoke;
    }
    p {
      font-size: 24px;
    }
  }

  .biginner-detail {
    padding: 40px 0;
  }

  .biginner-detail-inner {
    padding: 0;
    margin: 0 20px;
    gap: 24px;
  }

  .biginner-detail-text {
    p {
      font-size: 16px;
      line-height: 1.5;
      text-align: justify;
      text-justify: inter-ideograph;
      letter-spacing: 0.03rem;
    }
  }
}

@include global.media-query("sp-small") {
  .for-biginner {
    p {
      font-size: 22px;
    }
  }

  .biginner-detail {
    span {
      font-size: 28px;
    }
  }
}
</style>
