<template>
	<template v-if="pageMode === PageModeType.OK">
		<ion-page>
			<ion-header :translucent="true">
				<ion-toolbar>
					<ion-title>My auth header for pc</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-content :fullscreen="true">
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">My auth header for mobile</ion-title>
					</ion-toolbar>
				</ion-header>

				<router-view :key="routerKey"/>
				<ui-alerts></ui-alerts>
			</ion-content>
		</ion-page>
	</template>
	<template v-else-if="pageMode === PageModeType.PAGE_NOT_FOUND">
		<fit-page-not-found-error></fit-page-not-found-error>
	</template>
	<template v-else-if="pageMode === PageModeType.ACCESS_DENIED">
		<fit-access-denied-error></fit-access-denied-error>
	</template>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import UiAlerts from "@/components/alerts/UiAlerts.vue";
import FitAccessDeniedError from "@/views/errors/FitAccessDeniedError.vue";
import FitPageNotFoundError from "@/views/errors/FitPageNotFoundError.vue";
import { PageModeType } from "@/store/modules/root/types/pageModeType";
import { useRootStore } from "@/store/modules/root";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";

const mainStore = useRootStore();
const { pageMode } = storeToRefs(mainStore);

const route = useRoute();
const routerKey = computed(() => {
	const key = route.meta && route.meta.key ? route.meta.key : route.name;
	return key != null ? key.toString() : "";
});
</script>

<style scoped lang="scss">
</style>
