<template>
  <div class="wrapper">
    <custom-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomForm from "@/components/CustomForm.vue";
// import UnityFrame from "@/components/UnityFrame.vue";

export default defineComponent({
  name: "Home",
  components: {
    CustomForm,
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