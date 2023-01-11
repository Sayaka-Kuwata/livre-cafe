<template>
  <section id="News">
    <TitleBorder>
      <template v-slot:title-text>NEWS</template>
    </TitleBorder>
    <div class="news-wrapper">
      <NewsCard :cards="cards" />
    </div>
  </section>
</template>

<script>
import TitleBorder from "@/atoms/title-border";
import NewsCard from "@/molecules/news-card";
import ImageComingSoon from "@/assets/images/figure/news_01.png";
import ImageReading2 from "@/assets/images/figure/news_02.png";
import ImageBeer from "@/assets/images/figure/news_03.png";
import ImageReading1 from "@/assets/images/figure/news_04.png";
import ImageDrink from "@/assets/images/figure/news_05.png";
import ImageOpen from "@/assets/images/figure/news_06.png";

export default {
  name: "News",
  components: {
    TitleBorder,
    NewsCard,
    ImageComingSoon,
    ImageReading2,
    ImageBeer,
    ImageDrink,
    ImageOpen,
  },
  data() {
    return {
      cards: [
        {
          image: ImageComingSoon,
          time: "2022.11.25",
          text: "12/23の12:30~トークイベントの開催が決定いたしました。作家の山崎ナオコーラさんと加藤千恵さんに、先月発売になったばかりの新刊についてのトークショーです",
        },
        {
          image: ImageReading2,
          time: "2022.11.18",
          text: "ご好評により、読書会第二弾が決定いたしました。\n日時は12/03の12:30~を予定しております。課題図書は改めてご連絡いたします。",
        },
        {
          image: ImageBeer,
          time: "2022.10.30",
          text: "LIVREでは11/1より、ビールも販売させていただくことになりました。\n期間限定の種類もございます。仕事帰りの一服にいかがですか？",
        },
        {
          image: ImageReading1,
          time: "2022.10.14",
          text: "来月11/10に読書会を開催することになりました。課題図書は今村夏子さんの「こちらあみこ」になります。参加人数は10名様までとさせていただきます。",
        },
        {
          image: ImageDrink,
          time: "2022.10.08",
          text: "LIVREオープン記念として本日から31日までドリンク全て500円とさせていただきます。尚、書籍をご購入の方はコーヒーのみおかわり自由とさせていただきます！",
        },
        {
          image: ImageOpen,
          time: "2022.10.01",
          text: "LIVREがオープンいたしました。\nドリンク片手に自由にお好きな本を読むことができます。皆さまの「癒し」や「出会い」を提供できるような場所にできたらと思います。",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.news-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

@include global.media-query("pc-sp") {
  .news-wrapper {
    padding: 80px;
  }
}

@include global.media-query("sp") {
  .news-wrapper {
    max-width: 100%;
    padding: 40px 0;
    margin: 0 20px;
  }
}
</style>
