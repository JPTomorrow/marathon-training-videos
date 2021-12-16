<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StandardTopNavbar",
  components: {
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  position: fixed;
  top: 0;
}
</style>