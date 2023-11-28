import { defineStore } from "pinia";

// export const useUserStore = defineStore("login", {
//   state() {
//     return {
//       username: "小红",
//       age: 10,
//     };
//   },
// });

// export const useUserStore = defineStore("user", () => {
//   const user = reactive({
//     username: "小红",
//     age: 10,
//   });

//   return { user };
// });

export const useUserStore = defineStore("user", {
	state: () => ({
		name: "",
		age: 0,
		sex: 0,
		username: "",
		isLogin: false
	}),
	persist: {
		enabled: true, // true 表示开启持久化保存
		strategies: [{
			// 自定义存储的 key，默认是 store.$id
			key: "user",
			// 可以指定任何 extends Storage 的实例，默认是 sessionStorage
			storage: localStorage,
			// state 中的字段名，按组打包储存
			// paths: ["name", "age", "sex", "username", "isLogin"]
		}]
	},
});