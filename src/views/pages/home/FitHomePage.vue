﻿<template>
	<ion-page>
		<ion-header :fullscreen="true">
			<ion-toolbar>
				<ion-title>{{ title }}</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content class="test-div">
			<div>
				Test counter: {{ count }}
			</div>
			<button @click="mainStore.INCREMENT">INCR counter</button>
			<button @click="mainStore.DOUBLE_INCREMENT">Double counter</button>
			<div>
				Doubled counter: {{ doubleCount }}
			</div>
			<div class="flex">
				<span>Test svg:</span>

				<ui-icon name="ico-info"
						 width="30"
						 height="30">
				</ui-icon>

				<div>{{ testSecretKey }}</div>

				<div>
					<h4 v-if="productsStore.isProductsLoading">Loading.....</h4>
					<button v-else @click="productsStore.FETCH_PRODUCTS">Fetch products</button>
				</div>

				<template v-if="products.products.length">
					<div class="products-wrapper">
						<div class="products">
							{{ first(products.products)?.id }}
						</div>
						<div class="products">
							{{ first(products.products)?.title }}
						</div>
						<div class="products">
							{{ first(products.products)?.description }}
						</div>
						<div class="products">
							{{ first(products.products)?.price }}
						</div>
						<div class="products">
							{{ first(products.products)?.discountPercentage }}
						</div>
					</div>
				</template>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonContent, IonPage, IonTitle, IonToolbar, IonHeader } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useRootStore } from "@/store/modules/root";
import { useFakeApiProductsStore } from "@/store/modules/fakeApi/products";
import UiIcon from "@/components/icon/UiIcon.vue";
import { first } from "lodash";

const mainStore = useRootStore();
const {
	count,
	doubleCount
} = storeToRefs(mainStore);

const productsStore = useFakeApiProductsStore();
const { products } = storeToRefs(productsStore);

const title = ref("Hello world!");

const testSecretKey = import.meta.env.VITE_SECRET_ENV_LOCAL_TEST_CODE;

</script>

<style scoped lang="scss">

.test-div {
	font-size: 20px;
	font-weight: 700;
}

.flex {
	display: flex;
	justify-content: center;
}

.products-wrapper {
	display: flex;
	justify-content: center;
	flex-direction: column;
}
</style>
