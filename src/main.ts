import { createApp } from "vue";
import FitApp from "@/FitApp.vue";
import router from "@/router";
import pinia from "@/store";

import { IonicVue } from "@ionic/vue";
import "@styles/styles.scss";

const app = createApp(FitApp);

app.use(IonicVue);
app.use(pinia);
app.use(router);

router.isReady().then(() => {
	app.mount("#app");
});
