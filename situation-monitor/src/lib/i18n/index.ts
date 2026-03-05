/**
 * Internationalization (i18n) translations
 * Supports: English (en), Simplified Chinese (zh)
 */

export type Lang = 'en' | 'zh';

export interface Translations {
	header: {
		title: string;
		refreshing: string;
		lastUpdated: string;
		neverRefreshed: string;
		settings: string;
		langToggle: string;
	};
	common: {
		loading: string;
		noData: string;
		error: string;
		close: string;
	};
	panels: Record<string, string>;
	settings: {
		title: string;
		enabledPanels: string;
		panelsDesc: string;
		dashboard: string;
		reconfigure: string;
		reconfigureHint: string;
		resetAll: string;
	};
	onboarding: {
		title: string;
		subtitle: string;
		panelCount: (n: number) => string;
		hint: string;
	};
	monitor: {
		createTitle: string;
		editTitle: string;
		nameLabel: string;
		namePlaceholder: string;
		keywordsLabel: string;
		keywordsPlaceholder: string;
		keywordsHint: string;
		enabled: string;
		delete: string;
		cancel: string;
		save: string;
		create: string;
		validationName: string;
		validationKeywords: string;
		validationMax: string;
	};
	monitorsPanel: {
		empty: string;
		createBtn: string;
		active: (n: number) => string;
		disable: string;
		enable: string;
		edit: string;
		delete: string;
		noMatches: string;
	};
	presets: Record<string, { name: string; description: string }>;
}

export const en: Translations = {
	header: {
		title: 'SITUATION MONITOR',
		refreshing: 'Refreshing...',
		lastUpdated: 'Last updated:',
		neverRefreshed: 'Never refreshed',
		settings: 'Settings',
		langToggle: '中文'
	},
	common: {
		loading: 'Loading...',
		noData: 'No data available',
		error: 'Error',
		close: 'Close'
	},
	panels: {
		map: 'Global Map',
		politics: 'World / Geopolitical',
		tech: 'Technology / AI',
		finance: 'Financial',
		gov: 'Government / Policy',
		heatmap: 'Sector Heatmap',
		markets: 'Markets',
		monitors: 'Custom Monitors',
		commodities: 'Commodities / VIX',
		crypto: 'Crypto',
		polymarket: 'Polymarket',
		whales: 'Whale Watch',
		mainchar: 'Main Character',
		printer: 'Money Printer',
		contracts: 'Gov Contracts',
		ai: 'AI Arms Race',
		layoffs: 'Layoffs Tracker',
		venezuela: 'Venezuela Situation',
		greenland: 'Greenland Situation',
		iran: 'Iran Situation',
		leaders: 'World Leaders',
		intel: 'Intel Feed',
		correlation: 'Pattern Analysis',
		narrative: 'Narrative Tracker',
		fed: 'Federal Reserve',
		'cn-markets': 'Chinese Markets',
		'ai-pulse': 'AI Pulse'
	},
	settings: {
		title: 'Settings',
		enabledPanels: 'Enabled Panels',
		panelsDesc: 'Toggle panels on/off to customize your dashboard',
		dashboard: 'Dashboard',
		reconfigure: 'Reconfigure Dashboard',
		reconfigureHint: 'Choose a preset profile for your panels',
		resetAll: 'Reset All Settings'
	},
	onboarding: {
		title: 'Welcome to Situation Monitor',
		subtitle: 'Choose a dashboard configuration to get started',
		panelCount: (n: number) => `${n} panels`,
		hint: 'You can change this later in Settings'
	},
	monitor: {
		createTitle: 'Create Monitor',
		editTitle: 'Edit Monitor',
		nameLabel: 'Name',
		namePlaceholder: 'e.g., Ukraine Crisis',
		keywordsLabel: 'Keywords (comma separated)',
		keywordsPlaceholder: 'e.g., ukraine, zelensky, kyiv',
		keywordsHint: 'News matching any of these keywords will appear in your monitor',
		enabled: 'Enabled',
		delete: 'Delete',
		cancel: 'Cancel',
		save: 'Save Changes',
		create: 'Create Monitor',
		validationName: 'Name is required',
		validationKeywords: 'At least one keyword is required',
		validationMax: 'Maximum number of monitors reached (20)'
	},
	monitorsPanel: {
		empty: 'No monitors configured',
		createBtn: '+ Create Monitor',
		active: (n: number) => `${n} active`,
		disable: 'Disable',
		enable: 'Enable',
		edit: 'Edit',
		delete: 'Delete',
		noMatches: 'No recent matches'
	},
	presets: {
		'news-junkie': {
			name: 'News Junkie',
			description: 'Stay on top of breaking news across politics, tech, and finance'
		},
		trader: {
			name: 'Trader',
			description: 'Market-focused dashboard with stocks, crypto, and commodities'
		},
		geopolitics: {
			name: 'Geopolitics Watcher',
			description: 'Global situation awareness and regional hotspots'
		},
		intel: {
			name: 'Intelligence Analyst',
			description: 'Deep analysis, pattern detection, and narrative tracking'
		},
		minimal: {
			name: 'Minimal',
			description: 'Just the essentials - map, news, and markets'
		},
		everything: {
			name: 'Everything',
			description: 'Kitchen sink - all panels enabled'
		}
	}
};

export const zh: Translations = {
	header: {
		title: '态势监控',
		refreshing: '刷新中...',
		lastUpdated: '最后更新:',
		neverRefreshed: '从未刷新',
		settings: '设置',
		langToggle: 'EN'
	},
	common: {
		loading: '加载中...',
		noData: '暂无数据',
		error: '错误',
		close: '关闭'
	},
	panels: {
		map: '全球地图',
		politics: '世界 / 地缘政治',
		tech: '科技 / 人工智能',
		finance: '财经',
		gov: '政府 / 政策',
		heatmap: '板块热力图',
		markets: '市场行情',
		monitors: '自定义监控',
		commodities: '大宗商品 / VIX',
		crypto: '加密货币',
		polymarket: '预测市场',
		whales: '鲸鱼追踪',
		mainchar: '主角分析',
		printer: '印钞机',
		contracts: '政府合同',
		ai: 'AI 军备竞赛',
		layoffs: '裁员追踪',
		venezuela: '委内瑞拉态势',
		greenland: '格陵兰态势',
		iran: '伊朗态势',
		leaders: '全球领导人',
		intel: '情报流',
		correlation: '相关性分析',
		narrative: '叙事追踪器',
		fed: '美联储',
		'cn-markets': '中国股市',
		'ai-pulse': 'AI动态热点'
	},
	settings: {
		title: '设置',
		enabledPanels: '启用的面板',
		panelsDesc: '开关面板以自定义你的看板',
		dashboard: '看板设置',
		reconfigure: '重新配置看板',
		reconfigureHint: '选择预设面板配置',
		resetAll: '重置所有设置'
	},
	onboarding: {
		title: '欢迎使用态势监控',
		subtitle: '选择看板配置以开始使用',
		panelCount: (n: number) => `${n} 个面板`,
		hint: '可在设置中随时更改'
	},
	monitor: {
		createTitle: '新建监控',
		editTitle: '编辑监控',
		nameLabel: '名称',
		namePlaceholder: '例如：乌克兰危机',
		keywordsLabel: '关键词（逗号分隔）',
		keywordsPlaceholder: '例如：ukraine, zelensky, kyiv',
		keywordsHint: '包含任意关键词的新闻将出现在此监控中',
		enabled: '已启用',
		delete: '删除',
		cancel: '取消',
		save: '保存更改',
		create: '创建监控',
		validationName: '名称不能为空',
		validationKeywords: '至少需要一个关键词',
		validationMax: '已达到最大监控数量（20 个）'
	},
	monitorsPanel: {
		empty: '尚未配置监控',
		createBtn: '+ 新建监控',
		active: (n: number) => `${n} 个活跃`,
		disable: '禁用',
		enable: '启用',
		edit: '编辑',
		delete: '删除',
		noMatches: '近期无匹配新闻'
	},
	presets: {
		'news-junkie': {
			name: '新闻达人',
			description: '全面追踪政治、科技、财经突发新闻'
		},
		trader: {
			name: '交易员',
			description: '以市场为中心，涵盖股票、加密货币和大宗商品'
		},
		geopolitics: {
			name: '地缘观察员',
			description: '全球态势感知与地区热点追踪'
		},
		intel: {
			name: '情报分析师',
			description: '深度分析、模式检测与叙事追踪'
		},
		minimal: {
			name: '极简模式',
			description: '只保留核心内容——地图、新闻与市场'
		},
		everything: {
			name: '全部面板',
			description: '启用所有可用面板'
		}
	}
};

export const translations: Record<Lang, Translations> = { en, zh };
