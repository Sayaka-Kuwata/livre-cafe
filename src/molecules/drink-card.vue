<template>
  <div class="drink-card-wrapper">
    <ul class="c-flex">
      <li class="column--3" v-for="card in cards" :key="cards.id">
        <div class="drink-card-inner">
          <img :src="card.drinkImage" />
          <div class="menu-title">
            <p>{{ card.title }}</p>
          </div>
          <ul class="menu-item">
            <li v-for="item in card.items">{{ item.text }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DrinkCard",
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
</style>
