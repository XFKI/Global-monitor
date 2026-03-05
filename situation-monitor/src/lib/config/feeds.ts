/**
 * RSS feed and news source configuration
 */

import type { NewsCategory } from '$lib/types';

export interface FeedSource {
	name: string;
	url: string;
}

export interface IntelSource extends FeedSource {
	type: 'think-tank' | 'defense' | 'regional' | 'osint' | 'govt' | 'cyber';
	topics: string[];
	region?: string;
}

export const FEEDS: Record<NewsCategory, FeedSource[]> = {
	politics: [
		{ name: '新华社', url: 'https://feeds.bbci.co.uk/zhongwen/simp/world/rss.xml' },
		{ name: 'BBC中文', url: 'https://feeds.bbci.co.uk/zhongwen/simp/world/rss.xml' },
		{ name: '路透中文', url: 'https://cn.reuters.com/rssFeed/CNTopGenNews' },
		{ name: '纽约时报中文', url: 'https://cn.nytimes.com/rss/' },
		{ name: '德国之声中文', url: 'https://rss.dw.com/xml/rss-zh-all' },
		{ name: 'CNN国际', url: 'https://rss.cnn.com/rss/edition_world.rss' },
		{ name: 'Reuters', url: 'https://feeds.reuters.com/reuters/worldNews' }
	],
	tech: [
		{ name: '机器之心', url: 'https://www.jiqizhixin.com/rss' },
		{ name: 'IT之家', url: 'https://www.ithome.com/rss/' },
		{ name: '36氪', url: 'https://36kr.com/feed' },
		{ name: '虎嗅', url: 'https://www.huxiu.com/rss/0.xml' },
		{ name: 'MIT科技评论', url: 'https://www.technologyreview.com/feed/' },
		{ name: 'ArXiv AI', url: 'https://rss.arxiv.org/rss/cs.AI' },
		{ name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml' }
	],
	finance: [
		{ name: '财联社', url: 'https://www.cls.cn/rss' },
		{ name: '第一财经', url: 'https://www.yicai.com/rss/' },
		{ name: '证券时报', url: 'https://www.stcn.com/rss.xml' },
		{ name: '华尔街日报中文', url: 'https://cn.wsj.com/rss/opinion' },
		{ name: 'CNBC', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html' },
		{ name: 'MarketWatch', url: 'https://feeds.marketwatch.com/marketwatch/topstories' },
		{ name: 'FT', url: 'https://www.ft.com/rss/home' }
	],
	gov: [
		{ name: 'White House', url: 'https://www.whitehouse.gov/news/feed/' },
		{ name: 'Federal Reserve', url: 'https://www.federalreserve.gov/feeds/press_all.xml' },
		{ name: 'SEC Announcements', url: 'https://www.sec.gov/news/pressreleases.rss' },
		{
			name: 'DoD News',
			url: 'https://www.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=1&Site=945'
		}
	],
	ai: [
		{ name: '机器之心', url: 'https://www.jiqizhixin.com/rss' },
		{ name: '量子位', url: 'https://www.qbitai.com/rss.xml' },
		{ name: 'ArXiv AI', url: 'https://rss.arxiv.org/rss/cs.AI' },
		{ name: 'OpenAI Blog', url: 'https://openai.com/news/rss.xml' },
		{ name: 'Hugging Face', url: 'https://huggingface.co/blog/feed.xml' }
	],
	intel: [
		{ name: 'CSIS', url: 'https://www.csis.org/analysis/feed' },
		{ name: 'Brookings', url: 'https://www.brookings.edu/feed/' }
	]
};

export const INTEL_SOURCES: IntelSource[] = [
	{
		name: 'CSIS',
		url: 'https://www.csis.org/analysis/feed',
		type: 'think-tank',
		topics: ['defense', 'geopolitics']
	},
	{
		name: 'Brookings',
		url: 'https://www.brookings.edu/feed/',
		type: 'think-tank',
		topics: ['policy', 'geopolitics']
	},
	{
		name: 'CFR',
		url: 'https://www.cfr.org/rss.xml',
		type: 'think-tank',
		topics: ['foreign-policy']
	},
	{
		name: 'Defense One',
		url: 'https://www.defenseone.com/rss/all/',
		type: 'defense',
		topics: ['military', 'defense']
	},
	{
		name: 'War on Rocks',
		url: 'https://warontherocks.com/feed/',
		type: 'defense',
		topics: ['military', 'strategy']
	},
	{
		name: 'Breaking Defense',
		url: 'https://breakingdefense.com/feed/',
		type: 'defense',
		topics: ['military', 'defense']
	},
	{
		name: 'The Drive War Zone',
		url: 'https://www.thedrive.com/the-war-zone/feed',
		type: 'defense',
		topics: ['military']
	},
	{
		name: 'The Diplomat',
		url: 'https://thediplomat.com/feed/',
		type: 'regional',
		topics: ['asia-pacific'],
		region: 'APAC'
	},
	{
		name: 'Al-Monitor',
		url: 'https://www.al-monitor.com/rss',
		type: 'regional',
		topics: ['middle-east'],
		region: 'MENA'
	},
	{
		name: 'Bellingcat',
		url: 'https://www.bellingcat.com/feed/',
		type: 'osint',
		topics: ['investigation', 'osint']
	},
	{
		name: 'CISA Alerts',
		url: 'https://www.cisa.gov/uscert/ncas/alerts.xml',
		type: 'cyber',
		topics: ['cyber', 'security']
	},
	{
		name: 'Krebs Security',
		url: 'https://krebsonsecurity.com/feed/',
		type: 'cyber',
		topics: ['cyber', 'security']
	}
];
