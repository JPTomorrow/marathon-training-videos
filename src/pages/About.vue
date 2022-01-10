<template>
  <div id="about-container">
      <h1>About</h1>
      <p id="about-p1">Marathon Electrical LLC. prides itself in its initiative to train our employees to face the adverse conditions present in our field of work. This website is a step towards that initiative. It provides training videos for employees to watch, followed by a short test. The test will be submitted to the employee's recruiter, which will confirm the employee has completed the appropriate training video. This allows us to be accountable for what our employees know, and what training they have recieved.</p>
      <p id="about-author">Website Created By: Justin Morrow</p>
      <button id="about-back-btn" @click="goToVideoList()">Go Back</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  methods: {
    goToVideoList: function() {
      this.$router.push({
        name: "Home"
      });
    }
  }
})
</script>

<style scoped>
#about-container {
  width: 70%;
  color:ghostwhite;
  text-align: left;
}

#about-p1 {
    color: ghostwhite;
}

#about-author {
    color: ghostwhite;
}

#about-back-btn {
  margin-top: 10px !important;
  margin-bottom: 0 !important;
}

@media (max-width: 1200px) {
  #about-container {
    width: 100%;
    padding-top: 5px;
  }
}
</style>
