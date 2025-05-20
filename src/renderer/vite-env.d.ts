/// <reference types="vite/client" />

interface ViteTypeOptions {
	// 添加这行代码，你就可以将 ImportMetaEnv 的类型设为严格模式，
	// 这样就不允许有未知的键值了。
	// strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
	// 更多环境变量...
	VITE_DOMAIN: string
	VITE_BASE_API: string
	VITE_TICKET_URL: string
	VITE_BBS_URL: string
	VITE_EXTENSION_URL: string
	VITE_HOME: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}