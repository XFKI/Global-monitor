<script lang="ts">
	import { Panel, MarketItem } from '$lib/components/common';
	import { cnMarkets } from '$lib/stores';
	import { CN_INDICES } from '$lib/config/markets';

	const items = $derived($cnMarkets.items);
	const loading = $derived($cnMarkets.loading);
	const error = $derived($cnMarkets.error);
	const count = $derived(items.length);
</script>

<Panel id="cn-markets" title="中国股市" {count} {loading} {error}>
	{#if items.length === 0 && !loading && !error}
		<div class="empty-state">
			<span class="icon">📊</span>
			<span>A股行情数据加载中…</span>
		</div>
	{:else}
		<div class="cn-markets-list">
			{#each items as item (item.symbol)}
				<MarketItem {item} currencySymbol="" />
			{/each}
		</div>

		<div class="exchanges-legend">
			{#each CN_INDICES as idx}
				<span class="exchange-tag">{idx.display} <span class="ex-name">{idx.exchange}</span></span>
			{/each}
		</div>

		<div class="market-note">
			<span>数据来源: Yahoo Finance · 延时15分钟</span>
		</div>
	{/if}
</Panel>

<style>
	.cn-markets-list {
		display: flex;
		flex-direction: column;
	}

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

	.exchanges-legend {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		padding: 0.4rem 0.6rem;
		border-top: 1px solid var(--border);
		margin-top: 0.25rem;
	}

	.exchange-tag {
		font-size: 0.6rem;
		color: var(--text-secondary);
		background: rgba(0, 207, 255, 0.06);
		border: 1px solid rgba(0, 207, 255, 0.15);
		border-radius: 3px;
		padding: 1px 5px;
		white-space: nowrap;
	}

	.ex-name {
		color: var(--text-dim);
		margin-left: 2px;
	}

	.market-note {
		padding: 0.2rem 0.6rem 0.4rem;
		font-size: 0.55rem;
		color: var(--text-dim);
		opacity: 0.6;
	}
</style>
