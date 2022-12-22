<template>
  <div>
    <Header />
    <MainVisual />
  </div>
</template>

<script>
import Header from "@/organisms/header";
import MainVisual from "@/organisms/mainvisual";

export default {
  name: "IndexPage",
  components: {
    Header,
    MainVisual,
  },
};
</script>
