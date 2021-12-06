<template>
  <div id="container">
    <div id="wrapper">
      <h2 class="form-title">Register</h2>
      <div class="field-container">
        <label class="input-txt-label" for="firstName">First Name</label>
        <input class="input-txt-field" type="text" placeholder="First Name" v-model="form.firstName" name="firstName" />
      </div>
      <div class="field-container">
        <label class="input-txt-label" for="lastName">Last Name</label>
        <input class="input-txt-field" type="text" placeholder="Last Name" v-model="form.lastName" name="lastName" />
      </div>
      <div class="field-container">
        <p class="input-txtarea-label">Please pee on my face</p>
        <textarea class="input-txtarea-field" placeholder="textArea01" v-model="form.textArea01" name="textArea01" />
      </div>
      <div class="field-container">
        <p class="input-txtarea-label">Please pee on my face</p>
        <textarea class="input-txtarea-field" placeholder="textArea01" v-model="form.textArea01" name="textArea01" />
      </div>
      <div class="field-container">
        <input class="input-cb-field" type="checkbox" v-model="form.checkBoxTest" name="checkBox01" value="checkBox01" />
        <label class="input-cb-label" for="checkBox01">Single CheckBox</label>
      </div>
      <div class="field-container">
        <input class="input-cb-field" type="checkbox" v-model="form.checkBoxTest" name="checkBox02" value="checkBox02" />
        <label class="input-cb-label" for="checkBox02">Single CheckBox</label>
      </div>
      <div class="field-container">
        <input class="input-cb-field" type="radio" v-model="form.checkBoxTest" name="checkBox02" value="checkBox02" />
        <label class="input-cb-label" for="checkBox02">Single CheckBox</label>
      </div>
      <div class="field-container">
        <input class="input-cb-field" type="radio" v-model="form.radioTest" name="checkBox02" value="checkBox02" />
        <label class="input-cb-label" for="checkBox02">Single CheckBox</label>
      </div>
      
      <pre
        class="code"
        v-text="form"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormExamples",
  components: {
  },
  data() {
    return {
      form: {
        checkBoxTest: []
      },
    };
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

.form-title {
  color: ghostwhite;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
}

.input-txt-label {
  color: ghostwhite;
  padding: 0;
  margin: 0;
  padding-right: 15px;
}

.field-container {
  margin-bottom: 10px;
  margin-left: 15px;

}

.input-txt-field {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(255, 69, 0, .5);
  color: rgb(220, 220, 220);
  background-color: rgb(0, 0, 0 , .2);
  outline: none;
  transition: border .2s ease-in-out;
}

.input-txt-field:focus {
  border: 1px solid rgb(255, 69, 0, 1);
}

.input-txtarea-field {
  width: 30%;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(255, 69, 0, .5);
  color: rgb(220, 220, 220);
  background-color: rgb(0, 0, 0 , .2);
  outline: none;
  transition: border .2s ease-in-out;
}

.input-txtarea-field:focus {
  border: 1px solid rgb(255, 69, 0, 1);
}

.input-txtarea-label {
  color: ghostwhite;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}

.input-cb-field {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(255, 69, 0, .5);
  color: rgb(220, 220, 220);
  background-color: rgb(0, 0, 0 , .2);
  outline: none;
  transition: border .2s ease-in-out;
}

.input-cb-field:focus {
  border: 1px solid rgb(255, 69, 0, 1);
}

.input-cb-label {
  color: ghostwhite;
  padding: 0;
  margin: 0;
  padding-left: 15px;
}

.code {
  width: 100%;
  color: ghostwhite; 
}
</style>