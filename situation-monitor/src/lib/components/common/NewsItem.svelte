<script lang="ts">
	import type { NewsItem } from '$lib/types';
	import { timeAgo } from '$lib/utils';

	interface Props {
		item: NewsItem;
		showSource?: boolean;
		showAlert?: boolean;
		showDescription?: boolean;
		compact?: boolean;
	}

	let {
		item,
		showSource = true,
		showAlert = true,
		showDescription = false,
		compact = false
	}: Props = $props();
</script>

<div class="news-item" class:alert={showAlert && item.isAlert} class:compact>
	{#if showSource}
		<div class="item-source">
			{item.source}
			{#if showAlert && item.isAlert}
				<span class="alert-tag">ALERT</span>
			{/if}
		</div>
	{/if}

	<a class="item-title" href={item.link} target="_blank" rel="noopener noreferrer">
		{item.title}
	</a>

	{#if showDescription && item.description}
		<p class="item-description">{item.description}</p>
	{/if}

	<div class="item-meta">
		<span class="item-time">{timeAgo(item.timestamp)}</span>
		{#if item.region}
			<span class="item-region">{item.region}</span>
		{/if}
	</div>
</div>

<style>
	.news-item {
		padding: 0.55rem 0;
		border-bottom: 1px solid var(--border);
		transition: background 0.15s;
	}

	.news-item:last-child {
		border-bottom: none;
	}

	.news-item.compact {
		padding: 0.4rem 0;
	}

	.news-item.alert {
		margin: 0 -0.75rem;
		padding: 0.55rem 0.75rem;
		border-left: 2px solid var(--red);
		border-bottom: 1px solid rgba(248, 81, 73, 0.15);
		background: var(--red-dim);
	}

	.item-source {
		font-size: 0.55rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.25rem;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	.alert-tag {
		background: var(--red);
		color: white;
		font-size: 0.48rem;
		padding: 0.1rem 0.35rem;
		border-radius: 20px;
		font-weight: 700;
		letter-spacing: 0.08em;
	}

	.item-title {
		display: block;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.4;
		color: var(--text);
		text-decoration: none;
		transition: color 0.15s;
	}

	.item-title:hover {
		color: var(--accent);
	}

	.compact .item-title {
		font-size: 0.7rem;
		line-height: 1.35;
	}

	.item-description {
		font-size: 0.62rem;
		color: var(--text-dim);
		margin: 0.3rem 0 0;
		line-height: 1.45;
	}

	.item-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.3rem;
	}

	.item-time {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.55rem;
		color: var(--text-muted);
	}

	.item-region {
		font-size: 0.5rem;
		color: var(--accent);
		background: rgba(var(--accent-rgb), 0.1);
		padding: 0.1rem 0.3rem;
		border-radius: 2px;
		text-transform: uppercase;
	}
</style>
