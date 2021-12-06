# morderin-web-vue

## Project setup
```
npm install

```
## Required For Android Build
- copy local.properties to the android folder
- this line goes in gradle.properties -> org.gradle.jvmargs=-XX\:MaxHeapSize\=256m -Xmx256m
npm i

npm install -g @ionic/cli native-run

ionic cap run android -l --external

ionic cap run ios -l --external
