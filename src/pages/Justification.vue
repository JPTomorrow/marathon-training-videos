<template>
  <div id="container">
    <div id="wrapper">
      <h1>Justification for Creating MOP</h1>
        <h2>Below is a list of critical tasks that justify creating a MOP. Please read them before proceeding</h2>
        <ol id="reasons">
            <li>When work is performed within 12” of exposed voltage above 150vAC.</li>
            <li>Working in electrical equipment with Arc Flash labels stating NO APPROVED PPE, PPE above 40 Cal is Required, or on equipment with no label.</li>
            <li>Multiple source shutdown: systems with generators, dual utility feeds, main – tie – main switchgear, UPS systems, Solar Arrays, Loop feeds.</li>
            <li>All tasks on equipment or circuits rated above 600v once connection to a source has been established.</li>
            <li>Work on service equipment not protected by a building premises over current protection device. Fuses or circuit breaker fed directly from a utility or other medium voltage transformer upstream of the first fuse or circuit breaker.</li>
        </ol>
        <button type="button" id="next-btn" @click="goToSafetyForm">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Justification",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    goToSafetyForm() {
      this.$router.push("/safety-form");
    }
  },
});
</script>

<style scoped>
#container {
  padding: 0;
  margin: 0;
  width: 80%;
  background-color: rgb(72, 72, 72);
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
}

#wrapper {
  padding: 0;
  margin: 0;
  margin-left: 50px;
  margin-right: auto;
  padding-top: 25px;
  padding-bottom: 15px;
  text-align: left;
  
}

h1 {
  color: ghostwhite;
  margin: 0;
  padding: 0;
}

h2 {
  color: ghostwhite;
}

.login-container {
  margin-left: auto;
  margin-right: auto;
  background-color: #16161a;
  width: 60%;
  border-radius: 10px;
}

.justification-preamble {
  text-align: left;
  padding-left: 20px;
  padding-bottom: 25px;
  background-color: #16161a;
  width: 60%;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

#reasons {
  margin: 0;
  color: ghostwhite;
  padding-right: 20px;
}

#reasons li {
  margin-bottom: 15px;
}

#next-btn {
  background-color: transparent;
  color: orangered;
  border: 1px solid orangered;
  border-radius: 10px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
}

#next-btn:hover {
  background-color: orangered;
  color: ghostwhite;
}
</style>