<template>
  <div id="wrapper">
      <h1>Take the Test</h1>

      <!--<div id="search-container">
        <input id="search-box" v-model="searchText" placeholder="Search by title" />
      </div>

       load videos 
      <div id="error-display" v-if="videos == null">
        <p class="error-txt" v-if="filteredVideos.length == 0"><em>No videos match that name</em></p>
        <p class="error-txt" v-else><em>Loading...</em></p>
      </div>
      <div id="video-list" v-else>
        <div class="entry-container"  v-for="v in filteredVideos" :key="v" @click="goToVideoPage(v.title, v.englishUrl)">
          <p class="title">{{v.title}}</p>
          <p class="desc">{{v.description}}</p>
          </div>
        </div>-->

        <!-- Questions -->
        <div class="question" v-for="q in getQuestions()" :key="q">
          <h2>{{q.Text}}</h2>

          
          <label class="answer-label" v-for="a in q.Answers" :key="a">
            <input class="answer-field" type="radio" v-model="q.SelectedAnswer" name="a" :value="a.Letter" />
            {{a.AnswerText + " | " + getUniqueRadioName(q)}}
          </label>
        </div>

        <!-- print the test form -->
        <button id="test-btn" type="button" class="btn btn-primary" @click="printForm()">PrintForm</button>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SafetyForm, getTestByTitle, Test, Question, Answer } from '@/data/MarathonTrainingTestFormService';

export default defineComponent({
  name: "TrainingVideoTestForm",
  components: {
  },
  data() {
    return {
      title: this.$route.params.title as string,
      formData: SafetyForm
    };
  },
  methods: {
    getQuestions: function(): Question[] {
      let test: Test = getTestByTitle(this.title);
      return test.English.Questions;
    },
    getRadioName(q: Question): string {
      return q.Text.replace(" ", "").slice(0, 10);
    },
    printForm: function() {
      alert(JSON.stringify(this.getQuestions(), null, 2));
    }
  },
});
</script>

<style scoped>
.code {
  color: ghostwhite;
}

#wrapper {
  width: 100%;
  height: auto;
  text-align: left;
}

#video-list {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.error-txt {
  color:ghostwhite;
}

h1 {
  color: ghostwhite;
  margin: 0;
  padding: 0;
}

h2 {
  color: ghostwhite;
}

a {
  padding:0;
  margin:0;
}

.title {
  color: #eb1e23;
  text-decoration: none;
  padding: 0;
  margin: 0;
  padding-left: 10px;
}

.desc {
  padding: 0;
  margin: 0;
  color: rgb(184, 184, 184);
  padding-left: 20px;
  margin-top: 10px;
}

.entry-container {
  width: 100%;
  margin: 0;
  border-bottom: 1px solid rgb(136, 136, 136);
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.2s ease-in-out;
}

.entry-container:hover {
  background-color: rgb(87, 87, 87);
}

.entry-container:first-child {
  border-top: 1px solid rgb(136, 136, 136);
}

.question {
  color:ghostwhite;
}

#test-btn {
    width: 100px;
    margin-top: 50px;
    background-color: transparent;
    border: 1px solid #eb1e23;
    color: #eb1e23;
    padding: 10px;
    border-radius: 15px;
}

#test-btn:hover {
    background-color: #eb1e23;
    color: ghostwhite;
}

input {
  background-color: transparent;
  color:black;
  border: 2px orangered solid;
}

.answer-label {
  display: block;
}
</style>