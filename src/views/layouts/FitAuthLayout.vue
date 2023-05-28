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

				<router-view :key="$route.meta.key || $route.name"/>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import UiAlerts from "@/components/alerts/UiAlerts.vue";
import FitAccessDeniedError from "@/views/errors/FitAccessDeniedError.vue";
import FitPageNotFoundError from "@/views/errors/FitPageNotFoundError.vue";
import { PageModeType } from "@/store/modules/root/types/pageModeType";
import { useRootStore } from "@/store/modules/root";
import { storeToRefs } from "pinia";

const mainStore = useRootStore();
const { pageMode } = storeToRefs(mainStore);
</script>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 30px;
	background: #0033ff;
}

.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 30px;
	background: #aa00ff;
}
</style>
