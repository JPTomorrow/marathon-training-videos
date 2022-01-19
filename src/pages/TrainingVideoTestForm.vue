<template>
  <div id="wrapper">
    <h1 style="margin-bottom:15px;">Take the Test</h1>

    <label id="full-name-label" for="full-name-field" style="color: ghostwhite;">Full Name: </label>
    <input id="full-name-field" placeholder="full name" v-model="fullNameText" style="margin-bottom:10px;"/>
    <br />
    <label id="email-label" for="email-field" style="color: ghostwhite;">Email: </label>
    <input id="email-field" placeholder="email" v-model="emailText"/>

    <!-- Questions -->
    <div class="question" v-for="(q, idx) in getQuestions()" :key="q">
      <h2 id="question-text">{{(idx + 1) + ". " + q.Text}}</h2>

      <label class="answer-label" v-for="a in q.Answers" :key="a">
        <input class="answer-field" :checked="false" type="radio" v-model="q.SelectedAnswer" :name="idx" :value="a.Letter" />
        <span>{{a.AnswerText}}</span>
      </label>
    </div>
    
    <!--- Submit Button -->
    <div id="submit-wrapper">
      <button id="submit-btn" type="button" class="btn btn-primary" @click="toggleConfirmPrompt()">Submit</button>
      <div id="confirmation-prompt-wrapper">
        <p id="confirm-submit-txt">Are you sure you want to submit?</p>
        <button id="confirm-yes-btn" type="button" class="btn btn-primary" @click="{ toggleConfirmPrompt(); submitTest(); }">Confirm and Continue</button>
      </div>
    </div>
  </div>

  <div id="submitted-wrapper" v-if="results.isValid">
    <div id="passed-wrapper" v-if="results.isPassed">
      <h1 class="passed-header">Congratulations! <font color="green">You Passed!</font></h1>
      <p class="submitted-score">Score: {{ results.totalCorrect }} / {{ results.totalPossible }} -> {{ results.percentage }}%</p>
      <h2 class="passed-header-2">Copy the code below and turn it into your recruiter for them to confirm that you completed the test. DO NOT navigate away from this page without writing down the code or else you will have to watch the video and complete the test again to get another code.</h2>
      <h2 id="submitted-code">Unique Code: <font color="green">{{ results.uniqueCode }}</font></h2>
      <button id="video-list-btn" type="button" class="btn btn-primary" @click="goToVideoList()" disabled>Return to Training Videos</button>
    </div>
    <div id="failed-wrapper" v-else>
      <h1 class="tf-passed-header">Sorry, <font color="red">You Failed.</font></h1>
      <p class="tf-submitted-score">Score: {{ results.totalCorrect }} / {{ results.totalPossible }} -> {{ results.percentage }}%</p>
      <h2 class="tf-passed-header-2">Please rewatch the video all the way through and retake the test. 70%+ is a passing grade.</h2>

      <!-- <pre class="code" v-text="results" /> -->
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
  TrainingFormTestResult,
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
      showConfirmationPrompt: false,
      showEmailSentText: false,
      showSubmittedText: false,
      fullNameText: "",
      emailText: ""
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
    resultsAreEmpty: function(): boolean {
      return Object.keys(this.results).length === 0;
    },
    submitTest: function () {
      // check to see if full name and email have been provided
      if (this.fullNameText === "" || this.emailText === "") {
        alert("Please provide your full name and email.");
        return;
      }

      // get the test results
      let r = this.formData.evaluateTest(this.title, "English") as TrainingFormTestResult;
      this.results = r;
      this.showConfirmationPrompt = false;

      // send email if test has been passed
      if(r.isPassed) this.sendEmail();
    },
    sendEmail: async function() {
      // send email payload to the api to send email
      await fetch("/api/smtp-email",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            subject: this.getSubject(),
            message: this.getMessageBody(),
          }),
        });

      // toggle go to training videos button disabled
      let btn = document.getElementById('video-list-btn') as HTMLInputElement;
      btn.disabled = false;
    },
    getSubject: function() {
      let name = this.fullNameText === "" ? "An Employee " : this.fullNameText;
      return name + ` has passed the ${this.title}` + " Test";
    },
    getMessageBody: function() {
      let res = this.results as TrainingFormTestResult;
      let name = this.fullNameText === "" ? "no employee name provided" : this.fullNameText;
      let provided_email = this.emailText === "" ? "no email address provided" : this.emailText;

      let body = "<h1>Score: " + res.totalCorrect + "/" + res.totalPossible + " -> " + res.percentage + "%" + "</h1><!--!-->" +
      "<h1>Unique Code: " + res.uniqueCode + "</h1><!--!-->";

      body += "<h1>Test Name: " + this.title + "</h1><!--!-->";
      body += "<h1>Full Employee Name: " + name + "</h1><!--!-->";
      body += "<h1>Employee Email Address: " + provided_email + "</h1><!--!--><hr /><!--!-->";

      this.getQuestions().forEach(q => {
        body += "<h3>Question: " + q.Text + "</h3><!--!-->";
        body += "<p>Answer: " + (q.SelectedAnswer == undefined ? "no answer provided" : q.SelectedAnswer) + "</p><!--!-->";
      });

      return body;
    },
    retakeTest: function() {
      // we pass back the video url to load it on the watch video page
      // see if we can avoid passing this info back through url query
      this.$router.push({
        name: "WatchVideo",
        query: {
          title: this.title,
          videoUrl: this.$route.query.videoUrl
        }
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

@media (max-width: 1200px) {
 #wrapper {
    width: 100%;
    height: auto;
    text-align: left;
    margin-top: 10px;
    margin-left: 0 !important;
  } 

  #question-text {
    width: 100% !important;
  }

  #confirmation-prompt-wrapper {
    margin-bottom: 25px !important;
  }

  #passed-wrapper {
    width: 100%  !important;
    border-radius: 0 !important;
  }

  #failed-wrapper {
    width: 100% !important;
    border-radius: 0 !important;
  }
}

#submitted-wrapper {
    position: fixed;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100%;
    bottom:0;
}

#passed-wrapper {
    color: ghostwhite;
    background-color: rgb(24, 24, 24);
    border-radius: 20px;
    border: 1px solid #eb1e23;

    margin-left: auto;
    margin-right: auto;
    margin-top: 350px;
    width: 30%;
    text-align: left;
    padding: 25px;
}

#failed-wrapper {
    color: ghostwhite;
    background-color: rgb(24, 24, 24);
    border-radius: 20px;
    border: 1px solid #eb1e23;

    margin-left: auto;
    margin-right: auto;
    margin-top: 350px;
    width: 30%;
    text-align: left;
    padding: 25px;
}

#submit-wrapper {
  margin: 0;
  padding: 0;
  width:100%;
}

#confirmation-prompt-wrapper {
  transition: height 1s ease-in;
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
  padding-bottom: 10px;
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
  transition: all  0.1s ease-in-out;
}

.answer-label {
  display: block;
  color:ghostwhite;
  margin-top: 10px;
}

#confirm-submit-txt {
  color: ghostwhite;
  padding-top: 10px;
  padding-bottom: 10px;
}

#rewatch-video-btn {
  margin: 10px;
  margin-left: 0 !important;
}

#submitted-code {
  padding: 0;
  margin: 0;
}

#video-list-btn {
  margin: 0;
  margin-top: 25px;
}
</style>
