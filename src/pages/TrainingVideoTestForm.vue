<template>
  <div id="wrapper">
    <h1>Take the Test</h1>

    <!-- Questions -->
    <div class="question" v-for="(q, idx) in getQuestions()" :key="q">
      <h2 id="question-text">{{q.Text}}</h2>

      
      <label class="answer-label" v-for="(a, idx2) in q.Answers" :key="a">
        <input class="answer-field" :checked="idx2 === 0" type="radio" v-model="q.SelectedAnswer" :name="idx" :value="a.Letter" />
        <span>{{a.AnswerText}}</span>
      </label>
    </div>
    
    <!--- Submit Button -->
    <div id="submit-wrapper">
      <button id="submit-btn" type="button" class="btn btn-primary" @click="toggleConfirmPrompt()">Submit</button>
      <div id="confirmation-prompt-wrapper">
        <p id="confirm-submit-txt"> ass</p>
        <button id="confirm-yes-btn" type="button" class="btn btn-primary" @click="{ toggleConfirmPrompt(); submitTest(); }">Confirm and Continue</button>
      </div>
    </div>
  </div>

  <div id="submitted-wrapper" v-if="results.isValid">
    <div id="passed-wrapper" v-if="results.isPassed">
      <pre class="code" v-text="results" />
      <button id="video-list-btn" type="button" class="btn btn-primary" @click="goToVideoList()">Return to Training Videos</button>
    </div>
    <div id="failed-wrapper" v-else>
      <pre class="code" v-text="results" />
      <button id="rewatch-video-btn" type="button" class="btn btn-primary" @click="retakeTest()">Rewatch Video</button>
    </div>
  </div> 
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

    import {
    SafetyForm,
    Test,
    Question,
    TrainingFormTestResult
  } from '@/data/MarathonTrainingTestFormService';

export default defineComponent({
  name: "TrainingVideoTestForm",
  components: {
  },
  data() {
    return {
      title: this.$route.query.title as string,
      formData: SafetyForm,
      results: {},
      showConfirmationPrompt: false
    };
  },
  methods: {
    getQuestions: function(): Question[] {
      let test: Test = this.formData.getTestByTitle(this.title);
      return test.English.Questions;
    },
    toggleConfirmPrompt: function() {
      this.showConfirmationPrompt = !this.showConfirmationPrompt;
      let prompt = document.getElementById('confirmation-prompt-wrapper') as HTMLInputElement;
      prompt.style.height = this.showConfirmationPrompt ? 'auto' : '0';
    },
    submitTest: function () {
      let r = this.formData.evaluateTest(this.title, "English") as TrainingFormTestResult;
      alert(r.toString());
      this.results = r;
      this.showConfirmationPrompt = false
    },
    resultsAreEmpty: function(): boolean {
      return Object.keys(this.results).length === 0;
    },
    retakeTest: function() {
      this.$router.push({
        name: "WatchVideo",
      });
    },
    goToVideoList: function() {
      this.$router.push({
        name: "Home",
      });
    }
  },
});
</script>

<style scoped>

h1 {
  color: ghostwhite;
  margin: 0;
  padding: 0;
}

#wrapper {
  width: 100%;
  height: auto;
  text-align: left;
  margin-top: 10px;
  margin-left: 25px;
}

#submitted-wrapper {
    position: absolute;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    bottom:0;
}

#passed-wrapper {
    color: ghostwhite;
    background-color: rgb(24, 24, 24);
    border-radius: 20px;
    border: 1px solid #eb1e23;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 350px;
    padding: 25px;
}

#failed-wrapper {
    color: ghostwhite;
    background-color: rgb(24, 24, 24);
    border-radius: 20px;
    border: 1px solid #eb1e23;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 350px;
    padding: 25px;
}

#submit-wrapper {
  margin: 0;
  padding: 0;
  width:100%;
}

#confirmation-prompt-wrapper {
  transition: height 3s ease-in;
  display: block;
  line-height:0;
  height: 0;
  overflow: hidden;
}

.title {
  color: #eb1e23;
  text-decoration: none;
  padding: 0;
  margin: 0;
  padding-left: 10px;
}

#question-text {
  width: 60% ;
  color:ghostwhite;
  font-size: 14pt;
  font-weight: bold;
}

#test-btn {
    width: 100px;
    margin-top: 50px;
}

#confirm-yes-btn {
  margin: 0;  
}

.question {
  margin-top:25px;
}

.question input[type='radio'] {
  display: none;
  /*removes original button*/
}

.question label:before {
  /*styles outer circle*/
  content: " ";
  display: inline-block;
  position: relative;
  top: 0px;
  margin: 0 10px 0 0;
  padding: 0;
  width: 5px;
  height: 5px;
  border-radius: 11px;
  border: 1px solid #eb1e23;
  background-color: transparent;
}

.question label input[type='radio']:checked+span {
  /*styles inside circle*/
  border-radius: 2px;
  padding:  2px;
  width: 0px;
  height: 8px;
  top: 1px;
  left: 6px;
  color: #eb1e23;;
  border: 1px solid #eb1e23;
  transition: all  2s ease-in-out;
}

.answer-label {
  display: block;
  color:ghostwhite;
  margin-top: 10px;

}
</style>
