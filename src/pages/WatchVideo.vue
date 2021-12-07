<template>
  <div id="wrapper">
    <h1 id="title">{{ url }}</h1>

    <div class="fluidMedia">
        <Youtube 
            src="{{ url }}" 
            @ready="onReady"
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
        <button id="tvp-test-btn" type="button" class="btn btn-primary" @onclick="GoToTest"
            disabled>@localizer["TVP_Test_Button"]</button>
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
        url: this.$route.params.videoUrl // + '?autoplay=1&showinfo=0&controls=0&modestbranding=1&rel=0&enablejsapi=1',
    };
  },
  methods: {
    onReady: function() {
            (this.$refs.youtube as any).playVideo();
    },
  },
});
</script>

<style scoped>
#wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
}

#title {
    padding-top: 25px;
    padding-bottom: 25px;
    color: ghostwhite;
}

.fluidMedia {
    width: 1022px;
    padding: 0;
    height: 768px;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
}

.fluidMedia iframe {
    width: 1024px;
    height: 768px;
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

#tvp-test-btn {
    width: 50%;
    margin-top: 50px;
    background-color: transparent;
    border: 1px solid #eb1e23;
    color: #eb1e23;
}

#tvp-test-btn:hover {
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