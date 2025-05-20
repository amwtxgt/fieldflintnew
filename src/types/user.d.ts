declare namespace User {

	
	/** 状态类型 */
	type Status = 0 | 1;
	
	/** 项目所有者类型 */
	type OwnerType = 0 | 1 | 2;
	
	/** 开发者类型 */
	type DeveloperType = 0 | 1;
	
	/** 地图类型 */
	type MapType = 0 | 1;
	
	/** 办公室地区类型 */
	type FsoType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

	/** 新建联系方式接口 */
	interface NewContactWay {
		/** 联系方式类型：邮箱或电话 */
		type: 'email' | 'phone';
		/** 联系方式信息 */
		info: string;
		/** 插件ID */
		plugin_id?: string;
		/** 是否校验：0-否，1-是 */
		is_vaild?: Status;
		/** 国家ID */
		country_id?: number;

		/** 邮件专有属性 */
		port?: number;
		host?: string;
		password?: string;
		imap_port?: string;
		imap_host?: string;
		/** IMAP是否可用：0-否，1-是 */
		imap_status?: Status;
		/** 写邮件默认字体 */
		font?: string;

	}

	/** 用户联系方式接口 */
	interface ContactWay extends Required<NewContactWay> {
		/** 联系方式ID */
		id: number;
		/** 用户ID */
		user_id: number;
		/** 更新时间戳 */
		update_time: number;
		/** 排序值 */
		sort_by: number;
	}

	/** CM系统中的用户信息接口 */
	interface CmUserInfo {
		/** 用户ID */
		id: number;
		/** 用户类型 */
		type: number;
		/** 用户全称 */
		username: string;
		/** 用户缩写 */
		nickname: string;
		/** 中文名字 */
		other_name: string;
		/** 用户状态：0-禁用，1-启用 */
		status: Status;
		/** 认证状态：0-未认证，1-已认证 */
		audit_status: Status;
		/** 更新时间戳 */
		update_time: number;
		/** 删除时间戳 */
		delete_time: number;
		/** 创建时间戳 */
		create_time: number;
		/** 文件路径 */
		file_path: string;
		/** 缩略图路径 */
		thumb_path: string;
		/** 联系方式列表 */
		infos: ContactWay[];
	}

	/** 用户权限数据格式 */
	interface UserAuth {
		/** 用户状态：0-冻结，1-正常，2-已删除 */
		status?: number;
		/** 是否是开发者：0-否，1-是 */
		is_developer?: DeveloperType;
		/** 是否项目所有人：0-普通会员，1-项目所有人，2-管理员 */
		is_owner?: OwnerType;
		/** 权限详情 */
		auths?: null | { excepts?: string[] };
	}

	/** 项目列表项接口 */
	interface ProjectListItem {
		/** 权限详情 */
		auths: { excepts?: string[] } | null;
		/** 到期时间戳 */
		end_time: number;
		/** 创建时间戳 */
		create_time: number;
		/** 项目描述 */
		descr: string;
		/** 文件路径 */
		file_path: string;
		/** 是否默认项目：0-否，1-是 */
		is_default: Status;
		/** 是否项目所有人：0-普通会员，1-项目所有人，2-管理员 */
		is_owner: OwnerType;
		/** 是否是开发者：0-否，1-是 */
		is_developer: DeveloperType;
		/** 锁定用户ID列表 */
		lock_user_ids: number[];
		/** 项目名称 */
		name: string;
		/** 项目ID */
		project_id: number;
		/** 项目状态：0-冻结，1-正常，2-已删除 */
		status: number;
		/** 缩略图路径 */
		thumb_path: string;
		/** 用户ID */
		user_id: string;
	}

	/** 项目详情接口 */
	interface Project {
		/** 项目ID */
		id: number;
		/** 项目名称 */
		name: string;
		/** 项目描述 */
		descr: string;
		/** 项目状态 */
		status: number;
		/** 创建者ID */
		creater_id: number;
		/** 更新时间戳 */
		update_time: number;
		/** 删除时间戳 */
		delete_time: number;
		/** 创建时间戳 */
		create_time: number;
		/** 限制数量 */
		limits: number;
		/** 文件ID */
		file_id: number;
		/** 缩略图ID */
		thumb_id: number;
		/** 到期时间戳 */
		end_time: number;
		/** 文件路径 */
		file_path: string;
		/** 缩略图路径 */
		thumb_path: string;
	}

	/** 激活码信息接口 */
	interface ActiveationKey {
		/** 激活码ID */
		id: number;
		/** 激活码 */
		code: string;
		/** 关联项目ID */
		project_id: number;
		/** 创建时间戳 */
		create_time: number;
		/** 用户ID */
		user_id: number;
		/** 限制人数 */
		limit: number;
		/** 到期时间戳 */
		end_time: number;
	}

	/** 用户信息接口（扩展自CmUserInfo） */
	interface UserInfo extends CmUserInfo {
		/** 项目ID */
		project_id: number;
		/** 用户令牌 */
		token: string;
		/** 项目列表 */
		project_list: ProjectListItem[];
	}

	/** CM项目格式接口 */
	interface CMItem {
		/** 项目ID */
		id: number;
		/** 关联项目ID */
		project_id: number;
		/** 用户ID */
		user_id: number;
		/** 绑定联系方式ID */
		bind_contact_id: number;
		/** 用户信息 */
		user: CmUserInfo;
		/** 权限详情 */
		auths: { excepts?: string[] } | null;
		/** 项目状态：0-冻结，1-正常，2-已删除 */
		status: number;
		/** 是否项目所有人：0-普通会员，1-项目所有人，2-管理员 */
		is_owner: OwnerType;
		/** 是否是开发者：0-否，1-是 */
		is_developer: DeveloperType;
		/** 锁定用户ID列表 */
		lock_user_ids: number[];
		/** 是否设置日历私密：0-否，1-是 */
		calendar_private: Status;
	}
}
