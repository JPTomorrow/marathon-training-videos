<template>
    <div class="canvas-container">
        <div id="gui-container" />
        <canvas id="renderer" />
        <button class="fullscreen-button" @click="fullscreen">fs</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Scene, SceneData } from "@/components/three_js/scene/scene"
import { BaseGUI } from '@/components/three_js/gui/gui'

let scene: Scene;
let gui: BaseGUI;

export default defineComponent({
    name: 'ThreeDContainer',
	mounted() {
		makeDefaultScene();
	},
	methods: {
		attachFullscreenCallback: function (my_canvas: HTMLElement, scene: Scene) {
			window.addEventListener('resize', () => { scene.FullscreenEventCallback(); }, );
		},
		fullscreen: function (){
			var el = document.getElementById('renderer');
			el?.requestFullscreen();
		}
	}
});

function makeDefaultScene() {
	let my_canvas = document.getElementById("renderer");
	scene = new Scene(my_canvas!);

	// this.attachFullscreenCallback(my_canvas!, scene);

	const cube = scene.addCubePrimitive();

	/* scene.addSimpleAnimation(() => {
		cube!.rotation.x += 0.01;
		cube!.rotation.y += 0.1;
	}); */

	gui = new BaseGUI(cube!);

	const landscape = scene.addPlaneGeometry(5,5,199,199);
	landscape.position.set(0, -2, 0);
	landscape.scale.set(1, 1, 1);
	landscape.rotation.x = -(Math.PI / 2);

	// const backdrop = scene.addPlaneGeometry(50,50,199,199);
	// backdrop.position.set(0, 0, -1);
	// backdrop.scale.set(1, 1, 1);
	
	const plight = scene.addPointLight();
	scene.addSkylight();

	scene.renderSceneToTarget();
}
</script>

<style scoped>
.canvas-container {
    margin: 0;
    padding: 0;
    max-width: 1280px;
    max-height: 800px;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 5% !important;
}

.canvas-container > canvas {
    width: 1280px;
    height: 800px;
}

.fullscreen-button { 
    width: 50px;
    min-height: 50px;
    background-color: blueviolet;
    position: absolute;
    transform: translate(-125%, 25%);

}

#gui-container {
    width: auto;
    height: auto;
    position:absolute;
    margin: 1%;
}
</style>