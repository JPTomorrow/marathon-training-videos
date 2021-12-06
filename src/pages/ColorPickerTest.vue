<template>
  <div class="wrapper">
    <color-search />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorSearch from "@/components/ColorSearch.vue";
// import UnityFrame from "@/components/UnityFrame.vue";

export default defineComponent({
  name: "Home",
  components: {
    ColorSearch,
  },
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