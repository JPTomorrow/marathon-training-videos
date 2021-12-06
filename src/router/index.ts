import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import FormExamples from "../pages/FormExamples.vue";
import MarathonSafetyForm from "../pages/MarathonSafetyForm.vue";
import Justification from "../pages/Justification.vue";
import PortfolioImageGrid from "../pages/PortfolioImageGrid.vue";
import ColorPickerTest from "../pages/ColorPickerTest.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Justification,
  },
  {
    path: "/safety-form",
    name: "MarathonSafetyForm",
    component: MarathonSafetyForm,
  },
  {
    path: "/portfolio_image_grid",
    name: "PortfolioImageGrid",
    component: PortfolioImageGrid,
  },
  {
    path: "/color_picker_test",
    name: "ColorPickerTest",
    component: ColorPickerTest,
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
