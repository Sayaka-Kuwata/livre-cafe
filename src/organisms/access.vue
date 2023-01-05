<template>
  <section class="access">
    <TitleBorder>
      <template v-slot:title-text>ACCESS</template>
    </TitleBorder>
    <div class="access-wrapper">
      <div class="access-wrapper-inner">
        <img src="@/assets/images/figure/access-livre.png" />
        <div class="address-detail">
          <p>LIVRE<span>BOOK AND CAFE</span></p>
        </div>
        <address>
          〒180-0003 東京都武蔵野市吉祥寺南町3-8-1-105
          JR吉祥寺駅公園口より徒歩5分<br />
          TEL. 03-1234-5678<br />
          営業時間:11:00〜23:00<br />
          休業日:年中無休 (年末年始等をのぞく)<br />
          DRINKのご注文は22:30ラストオーダーとさせていただきます。
        </address>
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
  display: grid;
  grid-template-rows: 113px 1fr;
  grid-template-columns: 380px 1fr;
  gap: 0 50px;
  img {
    max-width: 380px;
    height: 293px;
    object-fit: cover;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
}

.address-detail {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
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
}

address {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-size: 18px;
  line-height: 2;
}

@include global.media-query("pc-sp") {
  .access-wrapper {
    padding: 80px;
  }
}

@include global.media-query("tb") {
  .access-wrapper-inner {
    display: flex;
    flex-direction: column;
    img {
      order: 2;
      margin: 0 auto 24px;
    }
  }

  .address-detail {
    order: 1;
    p {
      margin: 0 auto 32px;
    }
  }

  address {
    order: 3;
  }
}

@include global.media-query("sp") {
  .access-wrapper {
    max-width: 100%;
    padding: 40px 0;
    margin: 0 20px;
  }

  .access-wrapper-inner {
    img {
      max-width: 100%;
      height: 240px;
      margin-bottom: 16px;
    }
  }

  .address-detail {
    p {
      font-size: 45px;
      margin-bottom: 24px;
      span {
        font-size: 12px;
      }
    }
  }

  address {
    font-size: 15px;
  }
}
</style>
