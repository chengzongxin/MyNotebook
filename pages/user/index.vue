<script setup lang="ts">
	import { ref } from "vue";
	import { onPageScroll, onShow } from "@dcloudio/uni-app";
	import { onMounted } from "vue";
	import { reactive } from "vue";


	/* 点击登录 */
	const onClickLogin = (e : "点击登录" | "点击头像登录" = "点击登录") => {
		//判断登录态
		uni.navigateTo({
			url: "/sp-login/login/index",
		});
	};
</script>

<template>
	<view class="content">
		<!-- nav bar -->
		<!-- <c-navigator :showBack="false" backgroundColor="transparent" title="我的" ref="navRef" /> -->

		<!-- header -->
		<view class="header">
			<view class="circle"></view>
			<view class="avatar">
				<image class="avatar-img" @click="onClickLogin('点击头像登录')"
					:src="'https://pic1.ijiangmao.com/te/osf/48733ae10b914739b1001a1c61e77aa6.png'">
				</image>
				<view class="avatar-edit">
					<image class="avatar-edit-img"
						src="https://pic1.ijiangmao.com/te/osf/3fb9f5d3190a40da8befa4e185a3b1dd.png"
						mode="scaleToFill" />
				</view>
			</view>

			<image class="setting" src="https://pic1.ijiangmao.com/te/osf/b1f8d8c2a0044638824b21ae25adbf0b.png"></image>
		</view>

		<!-- user info -->
		<view class="name" @click="onClickLogin('点击登录')">
			{{ "点击登录" }}
			<image class="name-edit" src="https://pic1.ijiangmao.com/te/osf/3fb9f5d3190a40da8befa4e185a3b1dd.png"
				mode="scaleToFill" />
		</view>
		<view class="phone">{{ "" }}</view>

	</view>
</template>

<style scoped lang="less">
	.content {
		//background-color: #f6f6f6;
		//min-height: 100vh;
		overflow: hidden;

		.header {
			position: relative;
			width: 100%;
			height: 392rpx;

			.circle {
				width: 682rpx;
				height: 392rpx;
				position: absolute;
				background: url("https://pic1.ijiangmao.com/te/osf/1c34dd2802dc4df5aee250f795a536d3.png") center no-repeat;
				background-size: 100%;
				width: 100%;
			}

			.avatar {
				position: absolute;
				width: 144rpx;
				height: 144rpx;
				border-radius: 50%;
				background-color: #dedede;
				bottom: 20rpx;
				left: 50%;
				margin-left: -72rpx;

				// overflow: hidden;
				.avatar-img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}

				.avatar-edit {
					position: absolute;
					width: 52rpx;
					height: 52rpx;
					bottom: 0;
					right: -14rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					background-color: #fff;

					.avatar-edit-img {
						width: 36rpx;
						height: 36rpx;
					}
				}
			}

			.setting {
				position: absolute;
				width: 48rpx;
				height: 48rpx;
				top: 206rpx;
				right: 32rpx;
			}
		}

		.name {
			text-align: center;
			margin: 20rpx auto 0 auto;
			font-size: 40rpx;
			color: #333333;
			font-weight: bold;
			position: relative;

			.name-edit {
				width: 36rpx;
				height: 36rpx;
			}
		}

		.phone {
			margin-top: 8rpx;
			font-size: 24rpx;
			color: #999999;
			text-align: center;
			margin-bottom: 70rpx;
		}

		.section {
			padding: 40rpx 0rpx;
			margin: 0 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			margin-bottom: 16rpx;
		}

		.list-header {
			padding: 0 32rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.list-header-text {
				font-family: MiSans-Semibold;
				font-size: 32rpx;
				color: #333533;
				letter-spacing: 0;
				font-weight: 600;
			}

			.list-header-more {
				font-family: MiSans-Normal;
				font-size: 28rpx;
				color: #1a1a1a;
				text-align: right;
				font-weight: 400;
				position: relative;
				padding-right: 40rpx;

				&::after {
					position: absolute;
					display: block;
					width: 28rpx;
					height: 28rpx;
					content: "";
					top: 50%;
					transform: translateY(-50%);
					right: 0rpx;
					background-image: url("https://pic1.ijiangmao.com/te/osf/3be31a21d1e143b4ac49d302990f0a79.png");
					background-repeat: no-repeat;
					background-size: contain;
				}
			}
		}

		.order-list {
			margin-top: 40rpx;
			display: flex;

			.order-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 140rpx;

				.order-item-image {
					width: 72rpx;
					height: 72rpx;
					margin-right: 8rpx;
					position: relative;

					image {
						width: 100%;
						height: 100%;
					}

					.red-dot {
						height: 28rpx;
						line-height: 28rpx;
						padding: 0 10rpx;
						background: #f44531;
						font-size: 18rpx;
						color: #fff;
						display: inline-block;
						border-radius: 15rpx;
						position: absolute;
						top: 0;
						right: 0;
					}
				}

				.order-item-text {
					font-family: MiSans-Normal;
					font-size: 24rpx;
					color: #1a1a1a;
					text-align: center;
					font-weight: 400;
				}
			}
		}

		.function-list {
			margin-top: 40rpx;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;

			.function-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 140rpx;

				.service-button {
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #fff;
					padding: 0;

					.function-item-image-bg {
						display: flex;
						width: 80rpx;
						height: 80rpx;
						padding: 16rpx;
						border-radius: 40rpx;
						background: #f6f6f6;

						.function-item-image {
							width: 100%;
							height: 100%;
						}
					}

					.function-item-text {
						margin-top: 8rpx;
						font-family: MiSans-Normal;
						font-size: 24rpx;
						color: #1a1a1a;
						text-align: center;
						font-weight: 400;
						height: 34rpx;
						line-height: 34rpx;
					}
				}
			}
		}
	}
</style>