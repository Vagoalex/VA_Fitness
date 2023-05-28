<template>
	<template v-if="pageMode === PageModeType.OK">
		<ion-page>
			<ion-header :translucent="true">
				<ion-toolbar>
					<ion-title>My header for pc</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-content :fullscreen="true">
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">My header for mobile</ion-title>
					</ion-toolbar>
				</ion-header>

				<router-view :key="`${routerKey}`"></router-view>
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
import { computed, ComputedRef } from "vue";
import { useRootStore } from "@/store/modules/root";
import { storeToRefs } from "pinia";
import { PageModeType } from "@/store/modules/root/types/pageModeType";
import FitPageNotFoundError from "@/views/errors/FitPageNotFoundError.vue";
import FitAccessDeniedError from "@/views/errors/FitAccessDeniedError.vue";
import UiAlerts from "@/components/alerts/UiAlerts.vue";
import { useRoute } from "vue-router";

const mainStore = useRootStore();
const { pageMode } = storeToRefs(mainStore);


const route = useRoute();
const routerKey: ComputedRef<string> = computed(() => {
	const key = route.meta?.key ?? route.name;
	console.warn("route", route);
	console.warn("route.name", route.name);
	console.warn("key", key);
	return key ? key.toString() : "";
});
</script>

<style lang="scss">
</style>
