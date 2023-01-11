<template>
  <section>
    <TitleBorder>
      <template v-slot:title-text>CONCEPT</template>
    </TitleBorder>
    <div class="concept-text">
      <FadeIncomponent>
        <p>
          LIVREでは新しいカタチの本屋を目指します。<br />ネットに繋げば簡単に手に入る時代。<br />何気なく立ち寄った書店で「偶然」本と出会う機会も少なくなっているのではないでしょうか。
        </p>
        <p>
          お仕事の帰りにふと癒しの本に出会う。待ち合わせの僅かな時間にずっと先の未来の本に出会う。
        </p>
        <p>
          私たちは実際に本に触れ、その時の自分に必要な本に「偶然」出会うきっかけになれたらと思っています。
        </p>
      </FadeIncomponent>
    </div>
  </section>
</template>

<script>
import TitleBorder from "@/atoms/title-border";
import FadeIncomponent from "@/atoms/fade-in";

export default {
  name: "Concept",
  components: {
    TitleBorder,
    FadeIncomponent,
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.concept-text {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
  p {
    @include global.font-20-normal(var.$color-black);
    text-align: center;
    line-height: 2.5;
    margin-bottom: 20px;
  }
}

@include global.media-query("pc-sp") {
  .concept-text {
    padding: 80px;
  }
}

@include global.media-query("tb") {
  .concept-text {
    p {
      font-size: 18px;
      text-align: left;
      line-height: 2;
    }
  }
}

@include global.media-query("sp") {
  .concept-text {
    padding: 40px 0;
    margin: 0 20px;
    p {
      font-size: 16px;
      line-height: 1.7;
      text-align: justify;
      text-justify: inter-ideograph;
    }
  }
}
</style>
