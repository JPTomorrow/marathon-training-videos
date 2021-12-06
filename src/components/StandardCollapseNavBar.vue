<template>
  <div :style="gridStyle" class="image-container">
    <transition v-for="(i, idx) in slide_imgs" :key="i.name" name="fade" mode="out-in" appear>
      <img @click="hideGridTile(i, idx)" v-if="i.show" class="grid-img" :style="{ backgroundColor: this.getRandomColor(), width: 'calc(100vw / ' + this.columns  + ')' }" :alt="i.name" :src="i.asset" />
      <div v-else class="unloaded-placeholder" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StandardCollapseNavBar",
  props: {
    images: {
      type: Array,
      required: true
    },
    columns: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      slide_imgs: this.images,
    }
  },
  computed: {
    gridStyle() {
      return {
        'grid-template-columns': 'repeat(auto-fit, minmax(calc(100vw / ' + this.columns  + '), 0fr))',
      };
    },
  },
  methods: {
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (let ii = 0; ii < 6; ii++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    showGridTile(img_info: any, idx: number) {
      let min = 25;
      let max = 75;
      let delay = (Math.floor(Math.random() * (max - min + 1) + min)) * idx;
      setTimeout(() => {
        img_info.show = true
      }, delay)
    },
    hideGridTile(img_info: any, idx: number) {
      let min = 25;
      let max = 75;
      let delay = (Math.floor(Math.random() * (max - min + 1) + min)) * idx;
      setTimeout(() => {
        img_info.show = false
      }, delay)
    }
  },
  mounted() {
    // add the show property to each image data
    this.slide_imgs = this.images.map(function(x: any) {
      return {
        name: x.name,
        asset: x.asset,
        show: false
      }
    });
    
    // Show all images after a delay
    this.slide_imgs.forEach((x: any, idx: number) => {
      this.showGridTile(x, idx);
    });
  },
});
</script>

<style scoped>
.image-container {
  padding: 0;
  margin: 0;
  grid-auto-flow: dense;
  grid-gap: 0px;
  display: grid;
}

.grid-img {
  padding: 0;
  margin: 0;
  height: auto;
  transition: transform .2s;
}

.grid-img:hover {
  transform: scale(1.2);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}

.unloaded-placeholder {
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>