<template>
  <div id="wrapper">
      <h1>Training Videos</h1>

      <div id="search-container">
        <input id="search-box" v-model="searchText" placeholder="Search by title" />
      </div>

      <!-- load videos -->
      <div id="error-display" v-if="videos == null">
        <p class="error-txt" v-if="filteredVideos.length == 0"><em>No videos match that name</em></p>
        <p class="error-txt" v-else><em>Loading...</em></p>
      </div>
      <div id="video-list" v-else>
        <div class="entry-container"  v-for="v in filteredVideos" :key="v" @click="goToVideoPage(v.title, v.englishUrl)">
          <p class="title">{{v.title}}</p>

          <div v-if="getTestAvailability(v.title)">
            <p class="test-availability">Employee Test - <font color="green">Available</font></p>
          </div>
          <div v-else>
            <p class="test-availability">Employee Test - <font color="red">Not Available</font></p>
          </div>

          <p class="desc">{{v.description}}</p>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { youtubeVideos, getVideosByName } from "@/data/YoutubeTutorialVideos.js"
import { SafetyForm } from '@/data/MarathonTrainingTestFormService';

export default defineComponent({
  name: "TrainingVidoes",
  components: {
  },
  data() {
    return {
      videos: youtubeVideos,
      filteredVideos: youtubeVideos,
      searchText: "",
      formData: SafetyForm,
    };
  },
  methods: {
    goToVideoPage(title: string, url: string) {
      this.$router.push({
        name: "WatchVideo",
        query: {
          title: title,
          videoUrl: url
        }
      });
    },
    getTestAvailability(title: string) {
      return this.formData.hasTest(title, "English");
    }
  },
  watch: {
    searchText(newVal) {
      if(newVal == "") {
        this.filteredVideos = this.videos;
      }
      else {
        this.filteredVideos = getVideosByName(newVal);
      }
    }
  }
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

#search-container {
  margin-top: 20px;
  margin-bottom: 20px;
}

#search-box {
  background-color: rgb(87, 87, 87);
  width: auto;
  border-radius: 5px;
  border: 1px solid #fff;
  color: ghostwhite;
  font-size: 12pt;
  vertical-align: middle;
}

#search-box:focus {
  outline: #eb1e23;
}

#icon-search {
  color: ghostwhite;
  vertical-align: middle;
  margin-right: 7px;
  border-radius: 5px;
  padding: 2px;
  border: 1px solid ghostwhite;
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

.test-availability {
  color: ghostwhite;
  padding: 0;
  margin: 0;
  font-size: 9pt;
  padding-left: 10px !important;
}

@media (max-width: 1200px) {
  #search-container {
    display: flex;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .entry-container {
    background-color: #191919;
    border-radius: 5px;
  }
}
</style>