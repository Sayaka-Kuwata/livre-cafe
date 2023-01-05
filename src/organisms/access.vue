<template>
  <section class="access">
    <TitleBorder>
      <template v-slot:title-text>ACCESS</template>
    </TitleBorder>
    <div class="access-wrapper">
      <div class="access-wrapper-inner c-flex">
        <img src="@/assets/images/figure/access-livre.png" />
        <div class="address-detail">
          <p>LIVRE<span>BOOK AND CAFE</span></p>
          <address>
            〒180-0003 東京都武蔵野市吉祥寺南町3-8-1-105
            JR吉祥寺駅公園口より徒歩5分<br />
            TEL. 03-1234-5678<br />
            営業時間:11:00〜23:00<br />
            休業日:年中無休 (年末年始等をのぞく)<br />
            DRINKのご注文は、22:30ラストオーダーとさせていただきます。
          </address>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleBorder from "@/atoms/title-border";

export default {
  name: "Access",
  components: {
    TitleBorder,
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.access-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.access-wrapper-inner {
  gap: 50px;
  img {
    max-width: 380px;
    height: 293px;
    object-fit: cover;
  }
}

.address-detail {
  flex: 1;
  p {
    @include global.font-60-bold;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 0.2rem;
    width: fit-content;
    margin-bottom: 24px;
    span {
      display: block;
      @include global.font-18-normal;
      letter-spacing: 0;
      text-align: center;
    }
  }
  address {
    font-size: 18px;
    line-height: 2;
  }
}

@include global.media-query("pc-sp") {
  .access-wrapper {
    padding: 80px;
  }
}
</style>
