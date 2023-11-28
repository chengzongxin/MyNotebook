<template>
	<view class="content">
		{{ user.name }}
		<text class="title">{{title}}</text>
		<view class="grid">
			<view class="grid-item" @click="navTo('/pages/dady-cost/list')">
				花费
			</view>
			<view class="grid-item" @click="navTo('/pages/dynamic/list')">
				动态
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { useUserStore } from "@/store/user"

	const user = useUserStore();
	const title = ref(123456789)

	onMounted(() => {
	})

	const navTo = (url : string) => {
		uni.navigateTo({
			url,
		});
	}
</script>

<style lang="less" scoped>
	.content {
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: 100rpx 100rpx 100rpx;
			gap: 10rpx;
			padding: 20rpx;

			.grid-item {
				background-color: aquamarine;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>