<script lang="ts">
	import type { MarketItem as MarketItemType } from '$lib/types';
	import { formatPercentChange, getChangeClass } from '$lib/utils';

	interface Props {
		item: MarketItemType;
		showSymbol?: boolean;
		showPrice?: boolean;
		compact?: boolean;
		currencySymbol?: string;
	}

	let {
		item,
		showSymbol = true,
		showPrice = true,
		compact = false,
		currencySymbol = '$'
	}: Props = $props();

	const isDataAvailable = $derived(!isNaN(item.price) && item.price !== null);
	const changeClass = $derived(isDataAvailable ? getChangeClass(item.changePercent) : '');
	const priceDisplay = $derived(
		!isDataAvailable
			? '—'
			: item.price > 100
				? item.price.toLocaleString('en-US', { maximumFractionDigits: 0 })
				: item.price.toFixed(2)
	);
	const changeText = $derived(isDataAvailable ? formatPercentChange(item.changePercent) : '—');
</script>

<div class="market-item" class:compact>
	<div class="market-info">
		<div class="market-name">{item.name}</div>
		{#if showSymbol}
			<div class="market-symbol">{item.symbol}</div>
		{/if}
	</div>

	<div class="market-data">
		{#if showPrice}
			<div class="market-price" class:unavailable={!isDataAvailable}>
				{isDataAvailable ? `${currencySymbol}${priceDisplay}` : priceDisplay}
			</div>
		{/if}
		<div class="market-change {changeClass}" class:unavailable={!isDataAvailable}>{changeText}</div>
	</div>
</div>

<style>
	.market-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--border);
		transition: background 0.15s;
	}

	.market-item:last-child {
		border-bottom: none;
	}

	.market-item.compact {
		padding: 0.35rem 0;
	}

	.market-info {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.market-name {
		font-size: 0.72rem;
		font-weight: 500;
		color: var(--text);
	}

	.compact .market-name {
		font-size: 0.68rem;
	}

	.market-symbol {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.52rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.market-data {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.1rem;
	}

	.market-price {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--text);
		font-variant-numeric: tabular-nums;
	}

	.compact .market-price {
		font-size: 0.68rem;
	}

	.market-change {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.62rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		padding: 0.05rem 0.35rem;
		border-radius: 20px;
	}

	.market-change.up {
		color: var(--green);
		background: var(--green-dim);
	}

	.market-change.down {
		color: var(--red);
		background: var(--red-dim);
	}

	.unavailable {
		color: var(--text-muted);
		opacity: 0.5;
		background: transparent;
	}
</style>
