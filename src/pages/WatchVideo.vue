<template>
  <div id="wrapper">
    <h1 id="title">{{ title }}</h1>

    <div class="fluidMedia">
        <Youtube 
            :src="url"
            :vars="videoProperties"
            width="100%" 
            @ready="onReady"
            @state-change="onStateChanged"
            @ended="enableGoToTestButton"
            ref="youtube" />
    </div>

    <div class="description">
        <h1 Underlined="true">INSTRUCTIONS</h1>
        <p>Please read carefully and complete all of the steps in order to ensure that your recruiter is informed that you have watched this video.</p>
        <ol id="tvp-instructions">
            <li>Make sure to watch this video,  paying close attention as you will be tested on this material.</li>
            <li>After watching this video, the 'Take the test' button below will become unlocked. Click on it to begin the test.</li>
            <li>When you arrive to the test page, make sure to input your Full name and Email address.</li>
            <li>Once you have completed the test you will be given a 6 charter code. You will be required to give this code to your recruiter.</li>
            <li>After you have given your code to the recruiter, the recruiter will give you all the required PPE, contact information and address to your assigned jobsite.</li>
        </ol>
        <button id="test-btn" type="button" class="btn btn-primary" @click="goToTestPage()" disabled>Take the test</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Youtube from 'vue3-youtube';

export default defineComponent({
  name: "WatchVideo",
  components: {
    Youtube
  },
  data() {
    return {
        title: this.$route.query.title,
        url: this.$route.query.videoUrl,
        videoProperties: {
            controls: 0,
            autoplay: 1,
            showinfo: 0,
            disablekb: 1,
            modestbranding: 1,
            start: 0
        }
    };
  },
  methods: {
    onReady: function() {
        (this.$refs.youtube as any).playVideo();
    },
    enableGoToTestButton: function() {
        let btn = document.getElementById('test-btn') as HTMLInputElement;
        if(btn) btn.disabled = false;
    },
    onStateChanged: function(event: any) {
        let state = event.target.playerInfo.playerState as number|undefined;
        if(state === 0) {
            this.enableGoToTestButton();
        }
    },
    goToTestPage: function() {
      this.$router.push({
        name: "TrainingVideoTestForm",
        query: {
          title: this.title,
          videoUrl: this.$route.query.videoUrl
        }
      });
    }
  },
});
</script>

<style scoped>
#wrapper {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

#title {
    padding-top: 25px;
    padding-bottom: 25px;
    color: ghostwhite;
}

.fluidMedia {
    width: 50%;
    padding: 0;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
}

.description {
    padding-top: 25px;
    padding-bottom: 25px;
    color: ghostwhite;
    text-align: left;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

.description p {
    
    text-align: left;
}

#tvp-instructions {
    color: ghostwhite;
}

#tvp-instructions li {
    color: ghostwhite;
    text-align: left;
    margin-top: 10px;
}

#test-btn {
    height: 50px;
    margin-top: 50px;
}

@media(max-width: 1200px) {
    .fluidMedia {
        width: 348px;
        height: 250px;
        border: 1px solid #ddd;
        border-radius: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    .fluidMedia iframe {
        width: 350px;
        height: 250px;
    }

    #title {
        font-size: 22pt;
    }

    .description {
        width: 95%;
    }

    #wrapper {
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        text-align: center;
    }

    #test-btn {
        height: 50px;
        margin-top: 50px;
        width: 100%;
    }
}
</style>