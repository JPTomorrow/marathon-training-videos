<template>
  <div class="wrapper">
    <image-grid :images="test_images"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageGrid from "@/components/ImageGrid.vue";

export default defineComponent({
  name: "PortfolioImageGrid",
  components: {
    ImageGrid,
  },
  data() {
    return {
      test_images: [] as any,
      test_img_cnt: 9,
    }
  },
  created() {
    this.test_images = this.makeTestImages();
  },
  methods: {
    makeTestImages: function () {
      var test_images: any[] = [];
      for (let i = 0; i < this.test_img_cnt; i++) {
        test_images.push({
          name: "test_image_" + i,
          asset: require("@/assets/logo.png")
        });
      }
      return test_images;
    }
  }
});
</script>

<style scoped>
.wrapper {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}
</style>