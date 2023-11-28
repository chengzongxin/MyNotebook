<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button @click="onClick">login</button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const title = ref(123456789)

	const onClick = () => {
		uni.navigateTo({
			url: '/uni_modules/uni-id-pages/pages/login/login-withpwd'
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>