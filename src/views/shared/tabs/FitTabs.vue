<template>
	<ion-page>
		<ion-menu content-id="main-content">
			<ion-header class="ion-no-border">
				<ion-toolbar>
					<ion-title class="ion-padding-horizontal">Fitness App</ion-title>
				</ion-toolbar>
			</ion-header>
		</ion-menu>
		<ion-tabs>
			<ion-router-outlet id="main-content" :animated="false"></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="home"
								href="/home">
					<ion-icon :icon="add"/>
				</ion-tab-button>

				<ion-tab-button tab="test" href="/test">
					<ion-icon :icon="notifications"/>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonMenu, IonHeader, IonToolbar, IonTabButton, IonTabs, IonTitle, IonIcon, IonPage, IonRouterOutlet } from "@ionic/vue";
import { add, notifications } from "ionicons/icons";

</script>

<style scoped lang="scss">
ion-tab-bar {
	position: relative;
	border-radius: 16px 16px 0 0;
	width: 100%;
	margin: 0 auto;
	border-width: 0;
}
</style>
