<template>
  <div id="container">
    <div id="wrapper">
      <h2 class="form-title">Safety Form</h2>
      <p id="required-txt"><font size="2" color="red">*</font> - marks a required field that must be filled out.</p>
      <!-- <div class="field-container">
        <label class="input-txt-label" for="firstName">First Name</label>
        <input class="input-txt-field" type="text" placeholder="First Name" v-model="form.firstName" name="firstName" />
        <label v-if="!form.firstName" class="input-txt-label" style="margin-left:10px" for="firstName"><font size="2" color="red">*</font></label>
      </div> -->
      <div class="field-container">
        <label class="input-txt-label" for="jobName">Job Name</label>
        <input class="input-txt-field" type="text" placeholder="Job Name" v-model="form.jobName" name="jobName" />
        <label v-if="!form.jobName" class="input-txt-label" style="margin-left:10px" for="jobName"><font size="2" color="red">*</font></label>
      </div>
      <div class="field-container">
        <label class="input-txt-label" for="jobNumber">Job Number</label>
        <input class="input-txt-field" type="text" placeholder="Job Number" v-model="form.jobNumber" name="jobNumber" />
        <label v-if="!form.jobNumber" class="input-txt-label" style="margin-left:10px" for="jobNumber"><font size="2" color="red">*</font></label>
      </div>
      <div class="field-container">
        <label class="input-txt-label" for="address">Address</label>
        <input class="input-txt-field" type="text" placeholder="Address" v-model="form.address" name="address" />
        <label v-if="!form.address" class="input-txt-label" style="margin-left:10px" for="address"><font size="2" color="red">*</font></label>
      </div>
      <div class="field-container">
        <label class="input-txt-label" for="creationDate">Creation Date</label>
        <input class="input-txt-field" type="text" placeholder="Creation Date" v-model="form.creationDate" name="creationDate" />
        <label v-if="!form.creationDate" class="input-txt-label" style="margin-left:10px" for="creationDate"><font size="2" color="red">*</font></label>
      </div>
      <div class="field-container">
        <label class="input-txt-label" for="dateOfWork">Date of Work</label>
        <input class="input-txt-field" type="text" placeholder="Date of Work" v-model="form.dateOfWork" name="dateOfWork" />
        <label v-if="!form.dateOfWork" class="input-txt-label" style="margin-left:10px" for="dateOfWork"><font size="2" color="red">*</font></label>
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
  name: "MarathonSafetyForm",
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

#required-txt {
  color: ghostwhite;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
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