<template>
  <section class="drink-menu" id="Drink">
    <TitleBorder>
      <template v-slot:title-text>DRINK</template>
    </TitleBorder>
    <DrinkCard :cards="cards" />
  </section>
</template>

<script>
import TitleBorder from "@/atoms/title-border";
import DrinkCard from "@/molecules/drink-card";
import ImgCoffee from "@/assets/images/figure/drink-coffee.png";
import ImgJuice from "@/assets/images/figure/drink-juice.png";
import ImgBeer from "@/assets/images/figure/drink-beer.png";

export default {
  name: "Drink",
  components: {
    TitleBorder,
    DrinkCard,
    ImgCoffee,
    ImgJuice,
    ImgBeer,
  },
  data() {
    return {
      cards: [
        {
          drinkImage: ImgCoffee,
          title: "Coffee / Tea",
          items: [
            {
              text: "コーヒー",
            },
            {
              text: "カフェラテ",
            },
            {
              text: "ダージリン",
            },
            {
              text: "アールグレイ",
            },
          ],
        },
        {
          drinkImage: ImgJuice,
          title: "Soft drink",
          items: [
            {
              text: "オレンジジュース",
            },
            {
              text: "グレープフルーツジュース",
            },
            {
              text: "ジンジャーエール",
            },
            {
              text: "コーラ",
            },
            {
              text: "ウーロン茶",
            },
          ],
        },
        {
          drinkImage: ImgBeer,
          title: "Soft drink",
          items: [
            {
              text: "モルツ",
            },
            {
              text: "黒ビール",
            },
            {
              text: "オリオンビール",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.drink-menu {
  margin-top: 80px;
}
</style>
