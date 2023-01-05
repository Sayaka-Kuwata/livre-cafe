<template>
  <section class="contact">
    <TitleBorder>
      <template v-slot:title-text>CONTACT</template>
    </TitleBorder>
    <div class="contact-inner">
      <p>
        イベントのご予約やその他お問い合わせは<br />下記電話かメールでお気軽にお問い合わせください
      </p>
      <address>
        <ul>
          <li>
            <div class="contact-detail c-flex">
              <img src="@/assets/images/icon/tel.svg" />
              <span>03-1234-5678</span>
            </div>
          </li>
          <li>
            <div class="contact-detail c-flex">
              <img src="@/assets/images/icon/mail.svg" />
              <span>info@livre.com</span>
            </div>
          </li>
        </ul>
      </address>
    </div>
  </section>
</template>

<script>
import TitleBorder from "@/atoms/title-border";

export default {
  name: "Contact",
  components: {
    TitleBorder,
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.contact-inner {
  padding: 80px 0;
  p {
    @include global.font-20-normal(var.$color-black);
    letter-spacing: 0.05rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 32px;
  }
  .contact-detail {
    align-items: center;
    gap: 20px;
  }
  ul {
    max-width: 340px;
    margin: 0 auto;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      @include global.font-35-normal(var.$color-black);
    }
  }
}
</style>
