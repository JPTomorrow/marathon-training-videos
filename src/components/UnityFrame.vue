
<template>
  <div id="unity-container" class="unity-desktop">
      <canvas id="unity-canvas" width=960 height=600></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"> </div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title">TestWeb</div>
      </div>
    </div>
</template>

<script lang="js" />
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UnityFrame",
  props: {
    title: {
      type: String,
      default: "UNAMED"
    }
  },
  mounted() {
    let unity_script = document.createElement('script');
    let post_loader_script = document.createElement('script');

    unity_script.setAttribute('src', '../unity/Build/bin.loader.js');
    post_loader_script.setAttribute('src', '../unity/post-loader-script.js');

    document.body.appendChild(unity_script);
    document.body.appendChild(post_loader_script);
  },
  methods: {
    
  }
});
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: red;
}

#unity-container { position: absolute }
#unity-container.unity-desktop { left: 50%; top: 50%; transform: translate(-50%, -50%) }
#unity-container.unity-mobile { width: 100%; height: 100% }
#unity-canvas { background: #231F20 }
.unity-mobile #unity-canvas { width: 100%; height: 100% }
#unity-loading-bar { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: none }
#unity-logo { width: 154px; height: 130px; background: url('../unity/TemplateData/unity-logo-dark.png') no-repeat center }
#unity-progress-bar-empty { width: 141px; height: 18px; margin-top: 10px; background: url('../unity/TemplateData/progress-bar-empty-dark.png') no-repeat center }
#unity-progress-bar-full { width: 0%; height: 18px; margin-top: 10px; background: url('../unity/TemplateData/progress-bar-full-dark.png') no-repeat center }
#unity-footer { position: relative }
.unity-mobile #unity-footer { display: none }
#unity-webgl-logo { float:left; width: 204px; height: 38px; background: url('../unity/TemplateData/webgl-logo.png') no-repeat center }
#unity-build-title { float: right; margin-right: 10px; line-height: 38px; font-family: arial; font-size: 18px }
#unity-fullscreen-button { float: right; width: 38px; height: 38px; background: url('../unity/TemplateData/fullscreen-button.png') no-repeat center }
#unity-warning { position: absolute; left: 50%; top: 5%; transform: translate(-50%); background: white; padding: 10px; display: none }
</style>
