import {createApp} from 'vue';
import type {App} from 'vue';
import {createPinia} from 'pinia'

/**
 * 创建页面应用的通用函数
 * @param component 页面组件
 * @returns Vue应用实例
 */
export function createPageApp(component: any): App {
	const app = createApp(component);
	let pina = createPinia()
	app.use(pina)
	app.mount('#app');
	return app;
}