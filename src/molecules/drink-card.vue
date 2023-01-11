<template>
  <div class="drink-card-wrapper">
    <ul class="c-flex">
      <li class="column--3" v-for="card in cards" :key="cards.id">
        <div class="drink-card-inner">
          <FadeIncomponent>
            <img :src="card.drinkImage" />
          </FadeIncomponent>
          <div class="menu-title">
            <FadeIncomponent>
              <p>{{ card.title }}</p>
            </FadeIncomponent>
          </div>
          <ul class="menu-item">
            <FadeIncomponent>
              <li v-for="item in card.items">{{ item.text }}</li>
            </FadeIncomponent>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import FadeIncomponent from "@/atoms/fade-in";

export default {
  name: "DrinkCard",
  components: {
    FadeIncomponent,
  },
  props: ["cards", "items"],
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.drink-card-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.drink-card-inner {
  img {
    border-top: 4px solid var.$color-primary;
    margin-bottom: 16px;
  }
}

.menu-title {
  margin-bottom: 4px;
  p {
    @include global.font-18-bold(var.$color-black);
  }
}

.menu-item {
  li {
    margin-bottom: 2px;
  }
}

@include global.media-query("pc-sp") {
  .drink-card-wrapper {
    padding: 80px;
  }
}

@include global.media-query("tb") {
  .drink-card-wrapper {
    ul {
      justify-content: space-between;
    }
  }
}

@include global.media-query("sp") {
  .drink-card-wrapper {
    max-width: 100%;
    padding: 40px 0;
    margin: 0 20px;
  }
}
</style>
