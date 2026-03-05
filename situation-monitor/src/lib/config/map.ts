// Map configuration - hotspots, conflict zones, and strategic locations

export interface Hotspot {
	name: string;
	lat: number;
	lon: number;
	level: 'critical' | 'high' | 'elevated' | 'low';
	desc: string;
}

export interface ConflictZone {
	name: string;
	coords: [number, number][];
	color: string;
}

export interface Chokepoint {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface CableLanding {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface NuclearSite {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface MilitaryBase {
	name: string;
	lat: number;
	lon: number;
	desc: string;
}

export interface Ocean {
	name: string;
	lat: number;
	lon: number;
}

export const THREAT_COLORS = {
	critical: '#ff0000',
	high: '#ff4444',
	elevated: '#ffcc00',
	low: '#00ff88'
} as const;

export const SANCTIONED_COUNTRY_IDS = [
	364, // Iran
	408, // North Korea
	760, // Syria
	862, // Venezuela
	112, // Belarus
	643, // Russia
	728, // South Sudan
	729 // Sudan
];

export const HOTSPOTS: Hotspot[] = [
	{
		name: '华盛顿',
		lat: 38.9,
		lon: -77.0,
		level: 'low',
		desc: '华盛顿特区 — 美国政治中心，白宫、五角大楼、国会山'
	},
	{
		name: '莫斯科',
		lat: 55.75,
		lon: 37.6,
		level: 'elevated',
		desc: '莫斯科 — 克里姆林宫，俄军指挥中枢，制裁焦点'
	},
	{
		name: '北京',
		lat: 39.9,
		lon: 116.4,
		level: 'elevated',
		desc: '北京 — 中共总部，中美战略博弈，科技竞争核心'
	},
	{
		name: '基辅',
		lat: 50.45,
		lon: 30.5,
		level: 'high',
		desc: '基辅 — 俄乌冲突前线，俄罗斯入侵仍在持续'
	},
	{
		name: '台北',
		lat: 25.03,
		lon: 121.5,
		level: 'elevated',
		desc: '台北 — 台海局势紧张，台积电战略要地，中国军事威胁'
	},
	{
		name: '德黑兰',
		lat: 35.7,
		lon: 51.4,
		level: 'critical',
		desc: '德黑兰 — 伊朗核计划加速，地区代理冲突，政权不稳'
	},
	{
		name: '特拉维夫',
		lat: 32.07,
		lon: 34.78,
		level: 'high',
		desc: '特拉维夫 — 以色列-加沙冲突，军事行动持续'
	},
	{
		name: '加沙',
		lat: 31.5,
		lon: 34.47,
		level: 'critical',
		desc: '加沙地带 — 人道主义危机，以哈战争烈度升级'
	},
	{
		name: '伦敦',
		lat: 51.5,
		lon: -0.12,
		level: 'low',
		desc: '伦敦 — 国际金融中心，五眼联盟，北约盟国'
	},
	{
		name: '布鲁塞尔',
		lat: 50.85,
		lon: 4.35,
		level: 'low',
		desc: '布鲁塞尔 — 欧盟/北约总部，欧洲政策决策中心'
	},
	{
		name: '平壤',
		lat: 39.03,
		lon: 125.75,
		level: 'elevated',
		desc: '平壤 — 朝鲜核威胁，弹道导弹试射频繁'
	},
	{
		name: '利雅得',
		lat: 24.7,
		lon: 46.7,
		level: 'elevated',
		desc: '利雅得 — 沙特石油，欧佩克+，也门冲突，地区强权'
	},
	{
		name: '新德里',
		lat: 28.6,
		lon: 77.2,
		level: 'low',
		desc: '新德里 — 印度崛起，中印边境争端，印太战略'
	},
	{
		name: '新加坡',
		lat: 1.35,
		lon: 103.82,
		level: 'low',
		desc: '新加坡 — 航运战略要地，亚洲金融中心'
	},
	{
		name: '东京',
		lat: 35.68,
		lon: 139.76,
		level: 'low',
		desc: '东京 — 美国盟友，地区安全支柱，经济强国'
	},
	{
		name: '首尔',
		lat: 37.57,
		lon: 126.98,
		level: 'elevated',
		desc: '首尔 — 朝鲜威胁前沿，驻韩美军，半岛局势'
	},
	{
		name: '加拉加斯',
		lat: 10.5,
		lon: -66.9,
		level: 'high',
		desc: '加拉加斯 — 委内瑞拉危机，马杜罗政权，美国制裁，人道主义紧急状态'
	},
	{
		name: '努克',
		lat: 64.18,
		lon: -51.72,
		level: 'elevated',
		desc: '努克 — 格陵兰，美国战略意图，北极争夺，丹麦主权争议'
	},
	{
		name: '南海',
		lat: 12.0,
		lon: 114.0,
		level: 'elevated',
		desc: '南海 — 中美战略博弈，岛礁建设，航行自由争端，油气资源'
	},
	{
		name: '上海',
		lat: 31.23,
		lon: 121.47,
		level: 'low',
		desc: '上海 — 中国经济中心，国际金融中心，贸易摩擦焦点'
	},
	{
		name: '伊斯坦布尔',
		lat: 41.01,
		lon: 28.95,
		level: 'elevated',
		desc: '伊斯坦布尔 — 控制博斯普鲁斯海峡，土耳其战略枢纽，北约复杂成员'
	},
	{
		name: '开罗',
		lat: 30.06,
		lon: 31.25,
		level: 'elevated',
		desc: '开罗 — 中东地区大国，苏丹冲突波及，以色列斡旋角色'
	},
	{
		name: '科索沃',
		lat: 42.66,
		lon: 21.17,
		level: 'elevated',
		desc: '科索沃 — 塞尔维亚主权争议，欧洲潜在冲突爆发点'
	}
];

export const CONFLICT_ZONES: ConflictZone[] = [
	{
		name: '乌克兰冲突区',
		coords: [
			[30, 52],
			[40, 52],
			[40, 45],
			[30, 45],
			[30, 52]
		],
		color: '#ff4444'
	},
	{
		name: '加沙地带',
		coords: [
			[34, 32],
			[35, 32],
			[35, 31],
			[34, 31],
			[34, 32]
		],
		color: '#ff4444'
	},
	{
		name: '台湾海峡',
		coords: [
			[117, 28],
			[122, 28],
			[122, 22],
			[117, 22],
			[117, 28]
		],
		color: '#ffaa00'
	},
	{
		name: '也门内战区',
		coords: [
			[42, 19],
			[54, 19],
			[54, 12],
			[42, 12],
			[42, 19]
		],
		color: '#ff6644'
	},
	{
		name: '苏丹冲突区',
		coords: [
			[22, 23],
			[38, 23],
			[38, 8],
			[22, 8],
			[22, 23]
		],
		color: '#ff6644'
	},
	{
		name: '缅甸内战区',
		coords: [
			[92, 28],
			[101, 28],
			[101, 10],
			[92, 10],
			[92, 28]
		],
		color: '#ff8844'
	},
	{
		name: '南海争议区',
		coords: [
			[105, 23],
			[122, 23],
			[122, 3],
			[105, 3],
			[105, 23]
		],
		color: '#ffaa00'
	},
	{
		name: '萨赫勒危机带',
		coords: [
			[-18, 20],
			[25, 20],
			[25, 10],
			[-18, 10],
			[-18, 20]
		],
		color: '#ff8844'
	},
	{
		name: '东海争端区',
		coords: [
			[122, 33],
			[132, 33],
			[132, 25],
			[122, 25],
			[122, 33]
		],
		color: '#ffcc00'
	}
];

export const CHOKEPOINTS: Chokepoint[] = [
	{
		name: '苏伊士',
		lat: 30.0,
		lon: 32.5,
		desc: '苏伊士运河 — 全球12%贸易过境，欧亚航线咽喉'
	},
	{
		name: '巴拿马',
		lat: 9.1,
		lon: -79.7,
		desc: '巴拿马运河 — 美洲大陆枢纽，太平洋-大西洋要道'
	},
	{
		name: '霍尔木兹',
		lat: 26.5,
		lon: 56.5,
		desc: '霍尔木兹海峡 — 全球21%石油过境，波斯湾出口'
	},
	{
		name: '马六甲',
		lat: 2.5,
		lon: 101.0,
		desc: '马六甲海峡 — 全球25%贸易过境，中国能源供应线'
	},
	{
		name: '曼德海峡',
		lat: 12.5,
		lon: 43.3,
		desc: '曼德海峡 — 红海门户，胡塞武装威胁区'
	},
	{ name: '直布罗陀', lat: 36.0, lon: -5.5, desc: '直布罗陀海峡 — 地中海出入口' },
	{
		name: '博斯普鲁斯',
		lat: 41.1,
		lon: 29.0,
		desc: '博斯普鲁斯海峡 — 黑海通道，俄罗斯出口咽喉'
	},
	{
		name: '宗谷海峡',
		lat: 45.8,
		lon: 141.5,
		desc: '宗谷海峡 — 日俄边界，太平洋-鄂霍次克海通道'
	}
];

export const CABLE_LANDINGS: CableLanding[] = [
	{ name: '纽约', lat: 40.7, lon: -74.0, desc: '纽约 — 跨大西洋枢纽，10条以上电缆' },
	{ name: '康沃尔', lat: 50.1, lon: -5.5, desc: '英国康沃尔 — 欧美互联网门户' },
	{ name: '马赛', lat: 43.3, lon: 5.4, desc: '法国马赛 — 地中海枢纽，SEA-ME-WE海缆' },
	{ name: '孟买', lat: 19.1, lon: 72.9, desc: '孟买 — 印度互联网门户，10条以上电缆' },
	{ name: '新加坡', lat: 1.3, lon: 103.8, desc: '新加坡 — 亚太互联网枢纽' },
	{ name: '香港', lat: 22.3, lon: 114.2, desc: '香港 — 中国互联网连接枢纽' },
	{ name: '东京', lat: 35.5, lon: 139.8, desc: '东京 — 跨太平洋电缆终端' },
	{ name: '悉尼', lat: -33.9, lon: 151.2, desc: '悉尼 — 澳大利亚/太平洋枢纽' },
	{ name: '洛杉矶', lat: 33.7, lon: -118.2, desc: '洛杉矶 — 太平洋互联网门户' },
	{ name: '迈阿密', lat: 25.8, lon: -80.2, desc: '迈阿密 — 美洲/加勒比海枢纽' }
];

export const NUCLEAR_SITES: NuclearSite[] = [
	{ name: '纳坦兹', lat: 33.7, lon: 51.7, desc: '纳坦兹 — 伊朗铀浓缩设施' },
	{ name: '宁边', lat: 39.8, lon: 125.8, desc: '宁边 — 朝鲜核综合体' },
	{ name: '迪莫纳', lat: 31.0, lon: 35.1, desc: '迪莫纳 — 以色列核设施' },
	{ name: '布什尔', lat: 28.8, lon: 50.9, desc: '布什尔 — 伊朗核电站' },
	{
		name: '扎波罗热',
		lat: 47.5,
		lon: 34.6,
		desc: '扎波罗热 — 欧洲最大核电站，冲突区内'
	},
	{ name: '切尔诺贝利', lat: 51.4, lon: 30.1, desc: '切尔诺贝利 — 隔离区，2022年曾被俄军占领' },
	{ name: '福岛', lat: 37.4, lon: 141.0, desc: '福岛 — 退役中核电站，核污水排海' }
];

export const MILITARY_BASES: MilitaryBase[] = [
	{ name: '拉姆施泰因', lat: 49.4, lon: 7.6, desc: '拉姆施泰因 — 美国空军，德国北约枢纽' },
	{
		name: '迪戈加西亚',
		lat: -7.3,
		lon: 72.4,
		desc: '迪戈加西亚 — 美英印度洋军事基地'
	},
	{
		name: '冲绳',
		lat: 26.5,
		lon: 127.9,
		desc: '冲绳 — 驻日美军，太平洋前沿存在'
	},
	{ name: '关岛', lat: 13.5, lon: 144.8, desc: '关岛 — 美国太平洋司令部，轰炸机基地' },
	{
		name: '吉布提',
		lat: 11.5,
		lon: 43.1,
		desc: '吉布提 — 美/中/法军事基地，非洲之角'
	},
	{ name: '卡塔尔', lat: 25.1, lon: 51.3, desc: '乌代德基地 — 美国中央司令部前进指挥部' },
	{
		name: '加里宁格勒',
		lat: 54.7,
		lon: 20.5,
		desc: '加里宁格勒 — 俄罗斯波罗的海飞地，导弹部署'
	},
	{ name: '塞瓦斯托波尔', lat: 44.6, lon: 33.5, desc: '塞瓦斯托波尔 — 俄罗斯黑海舰队' },
	{
		name: '海南',
		lat: 18.2,
		lon: 109.5,
		desc: '海南 — 中国核潜艇基地，南海战略支撑'
	},
	{
		name: '横须贺',
		lat: 35.28,
		lon: 139.67,
		desc: '横须贺 — 美军第七舰队母港，西太平洋核心'
	}
];

export const OCEANS: Ocean[] = [
	{ name: '大西洋', lat: 25, lon: -40 },
	{ name: '太平洋', lat: 0, lon: -150 },
	{ name: '印度洋', lat: -20, lon: 75 },
	{ name: '北冰洋', lat: 75, lon: 0 },
	{ name: '南大洋', lat: -60, lon: 0 }
];

export const WEATHER_CODES: Record<number, string> = {
	0: '☀️ Clear',
	1: '🌤️ Mostly clear',
	2: '⛅ Partly cloudy',
	3: '☁️ Overcast',
	45: '🌫️ Fog',
	48: '🌫️ Fog',
	51: '🌧️ Drizzle',
	53: '🌧️ Drizzle',
	55: '🌧️ Drizzle',
	61: '🌧️ Rain',
	63: '🌧️ Rain',
	65: '🌧️ Heavy rain',
	71: '🌨️ Snow',
	73: '🌨️ Snow',
	75: '🌨️ Heavy snow',
	77: '🌨️ Snow',
	80: '🌧️ Showers',
	81: '🌧️ Showers',
	82: '⛈️ Heavy showers',
	85: '🌨️ Snow',
	86: '🌨️ Snow',
	95: '⛈️ Thunderstorm',
	96: '⛈️ Thunderstorm',
	99: '⛈️ Thunderstorm'
};
