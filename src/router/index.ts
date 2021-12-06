import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import FormExamples from "../pages/FormExamples.vue";
import MarathonSafetyForm from "../pages/MarathonSafetyForm.vue";
import TrainingVidoes from "../pages/TrainingVideos.vue";
import PortfolioImageGrid from "../pages/PortfolioImageGrid.vue";
import ColorPickerTest from "../pages/ColorPickerTest.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: TrainingVidoes,
  },
  {
    path: "/safety-form",
    name: "MarathonSafetyForm",
    component: MarathonSafetyForm,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
