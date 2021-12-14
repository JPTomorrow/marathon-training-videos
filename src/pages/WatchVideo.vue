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
        <h1 Underlined="true">@localizer["TVP_Instructions"]</h1>
        <p>@localizer["TVP_Instruction_Steps_P1"]</p>
        <ol id="tvp-instructions">
            <li>@localizer["TVP_Instruction_Steps_UL1"]</li>
            <li>@localizer["TVP_Instruction_Steps_UL2"]</li>
            <li>@localizer["TVP_Instruction_Steps_UL3"]</li>
            <li>@localizer["TVP_Instruction_Steps_UL4"]</li>
            <li>@localizer["TVP_Instruction_Steps_UL5"]</li>
        </ol>
        <button id="test-btn" type="button" class="btn btn-primary" @click="goToTestPage()"
            >@localizer["TVP_Test_Button"]</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Youtube from 'vue3-youtube';

export default defineComponent({
  name: "WatchVudeo",
  components: {
    Youtube
  },
  data() {
    return {
        title: this.$route.params.title,
        url: this.$route.params.videoUrl,
        videoProperties: {
            controls: "1",
            autoplay: "1",
            showinfo: "0",
            disablekb: "1",
            modestbranding: "1",

        }
    };
  },
  methods: {
    onReady: function() {
        (this.$refs.youtube as any).playVideo();
    },
    enableGoToTestButton: function() {
        alert("enabling");
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
        params: {
          title: this.title,
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
}

.description p {
    color: ghostwhite;
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
    width: 50%;
    margin-top: 50px;
    background-color: transparent;
    border: 1px solid #eb1e23;
    color: #eb1e23;
}

#test-btn:hover {
    background-color: #eb1e23;
    color: ghostwhite;
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
}
</style>