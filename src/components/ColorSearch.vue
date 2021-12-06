<template>
  <div id="color-container">
    <div id="controls-container">
      <h2 id="color-title">{{color == "" ? 'Please type a color' : color}}</h2>
      <div class="field-container">
        <input class="input-txt-field" type="text" placeholder="Enter a hex color" v-model="color" name="color" />
      </div>
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
      color: "",
    };
  },
  watch: {
    color(newColor: string) {
      let container = document.getElementById("color-container");
      let title = document.getElementById("color-title");

      // check to see if the new color is a valid hex color
      let isColorValidHex = newColor === "" || /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(newColor);
      if(!isColorValidHex) return;

      if(container) {
          if(newColor[0] === "#") {
            container.style.backgroundColor = newColor; 
          }
          else if(newColor === "") {
            container.style.backgroundColor = "#000";
          }
        }

      if(title) {
        if(newColor[0] === "#") {
          let new_title_color = this.getContrastingColor(newColor);
          title.style.color = new_title_color;
        }
        else if(newColor === "") {
          title.style.color = "ghostwhite";
        }
      }
    },
  },
  methods: {
    getContrastingColor: function(color: string) {
      let rgb = this.hexToRgb(color);
      if(rgb) {
        let yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'ghostwhite';
      }
      else {
        return 'ghostwhite';
      }
    
    },
    hexToRgb: function(hex: string) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
  },
});
</script>

<style scoped>
#color-container {
  padding: 0;
  margin: 0;
  background-color: #000;
  /* center div middle*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  transition: background-color 0.5s ease;
}

#controls-container {
  width: 30%;
  padding-bottom: 20px;
}

.input-txt-field {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  padding: 0;
  margin: 0;
  padding-left: 10px;
  margin-top: 10px;
}

#color-title {
  font-size: 40px;
  font-weight: bold;
  color:ghostwhite;
  margin: 0;
  padding: 0;
  transition: color 0.5s ease;
}
</style>