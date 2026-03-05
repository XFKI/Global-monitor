<script lang="ts">
	import { Panel, NewsItem } from '$lib/components/common';
	import { aiNews } from '$lib/stores';

	// AI topic keyword clusters with Chinese labels
	const AI_TOPIC_CLUSTERS = [
		{ label: '大模型', keywords: ['llm', 'large language', 'gpt', 'claude', 'gemini', 'deepseek', '大模型'] },
		{ label: '具身AI', keywords: ['robot', 'embodied', 'humanoid', 'physical ai', '机器人'] },
		{ label: '多模态', keywords: ['multimodal', 'vision', 'image generation', 'sora', 'kling', '多模态'] },
		{ label: '推理模型', keywords: ['reasoning', 'chain of thought', 'o1', 'o3', 'r1', '推理'] },
		{ label: 'AI芯片', keywords: ['gpu', 'chip', 'nvidia', 'tpu', 'npu', 'accelerator', '芯片'] },
		{ label: '监管政策', keywords: ['regulation', 'policy', 'ban', 'safety', 'alignment', '监管', '政策'] },
		{ label: '商业落地', keywords: ['launch', 'product', 'revenue', 'enterprise', 'deploy', '上线'] },
		{ label: '开源生态', keywords: ['open source', 'open-source', 'hugging face', 'github', '开源'] }
	];

	const items = $derived($aiNews.items);
	const loading = $derived($aiNews.loading);
	const error = $derived($aiNews.error);
	const count = $derived(items.length);

	// Classify items into topic clusters
	const topicMap = $derived(() => {
		const map = new Map<string, typeof items>();
		AI_TOPIC_CLUSTERS.forEach((c) => map.set(c.label, []));
		map.set('其他', []);

		items.forEach((item) => {
			const text = (item.title + ' ' + (item.description ?? '')).toLowerCase();
			let matched = false;
			for (const cluster of AI_TOPIC_CLUSTERS) {
				if (cluster.keywords.some((kw) => text.includes(kw))) {
					map.get(cluster.label)!.push(item);
					matched = true;
					break;
				}
			}
			if (!matched) map.get('其他')!.push(item);
		});

		return map;
	});

	// Hot topics sorted by item count descending
	const hotTopics = $derived(() => {
		const tm = topicMap();
		return [...tm.entries()]
			.filter(([, v]) => v.length > 0)
			.sort(([, a], [, b]) => b.length - a.length)
			.slice(0, 6);
	});

	let activeTab = $state<string>('');
	const currentItems = $derived(() => {
		const tab = activeTab || (hotTopics()[0]?.[0] ?? '');
		return topicMap().get(tab) ?? items.slice(0, 15);
	});
</script>

<Panel id="ai-pulse" title="AI动态热点" {count} {loading} {error}>
	{#if items.length === 0 && !loading && !error}
		<div class="empty-state">
			<span class="icon">🤖</span>
			<span>AI动态数据加载中…</span>
		</div>
	{:else}
		<!-- Hot topic tabs -->
		<div class="topic-tabs">
			{#each hotTopics() as [label, topicItems]}
				<button
					class="topic-tab"
					class:active={activeTab === label || (!activeTab && hotTopics()[0]?.[0] === label)}
					onclick={() => (activeTab = activeTab === label ? '' : label)}
				>
					<span class="tab-label">{label}</span>
					<span class="tab-count">{topicItems.length}</span>
				</button>
			{/each}
		</div>

		<!-- Trend heat bar -->
		<div class="heat-bar">
			{#each hotTopics() as [label, topicItems]}
				{@const pct = Math.round((topicItems.length / count) * 100)}
				<div
					class="heat-segment"
					style="width: {pct}%; background: hsl({120 - pct * 1.2}, 80%, 40%)"
					title="{label}: {pct}%"
				></div>
			{/each}
		</div>

		<!-- News list for selected topic -->
		<div class="news-list">
			{#each currentItems().slice(0, 12) as item (item.id)}
				<NewsItem {item} />
			{/each}
		</div>
	{/if}
</Panel>

<style>
	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		text-align: center;
		color: var(--text-secondary);
		font-size: 0.7rem;
		padding: 1rem;
	}

	.icon {
		font-size: 2rem;
	}

	.topic-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		padding: 0.5rem 0.6rem 0.3rem;
		border-bottom: 1px solid var(--border);
	}

	.topic-tab {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.2rem 0.5rem;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-secondary);
		font-size: 0.65rem;
		cursor: pointer;
		transition: all 0.15s ease;
		line-height: 1.4;
	}

	.topic-tab:hover {
		border-color: var(--accent);
		color: var(--text);
	}

	.topic-tab.active {
		background: rgba(0, 207, 255, 0.12);
		border-color: var(--accent);
		color: var(--accent);
	}

	.tab-count {
		font-size: 0.55rem;
		opacity: 0.7;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		padding: 0 4px;
	}

	.heat-bar {
		display: flex;
		height: 3px;
		overflow: hidden;
		margin: 0 0 0.1rem;
	}

	.heat-segment {
		height: 100%;
		transition: width 0.4s ease;
	}

	.news-list {
		display: flex;
		flex-direction: column;
	}
</style>
