<script lang="ts">
	import type { SectorPerformance } from '$lib/types';
	import { formatPercentChange } from '$lib/utils';

	interface Props {
		sector: SectorPerformance;
		showSymbol?: boolean;
	}

	let { sector, showSymbol = false }: Props = $props();

	const colorClass = $derived(getColorClass(sector.changePercent));

	function getColorClass(change: number): string {
		if (change >= 2) return 'up-3';
		if (change >= 1) return 'up-2';
		if (change >= 0.5) return 'up-1';
		if (change >= 0) return 'up-0';
		if (change >= -0.5) return 'down-0';
		if (change >= -1) return 'down-1';
		if (change >= -2) return 'down-2';
		return 'down-3';
	}

	const changeText = $derived(formatPercentChange(sector.changePercent));
</script>

<div class="heatmap-cell {colorClass}">
	<div class="sector-name">{sector.name}</div>
	{#if showSymbol}
		<div class="sector-symbol">{sector.symbol}</div>
	{/if}
	<div class="sector-change">{changeText}</div>
</div>

<style>
	.heatmap-cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 0.4rem;
		border-radius: 5px;
		text-align: center;
		min-height: 3.2rem;
		transition:
			transform 0.15s,
			box-shadow 0.15s;
		border: 1px solid rgba(0, 0, 0, 0.15);
	}

	.heatmap-cell:hover {
		transform: scale(1.04);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
		z-index: 1;
		position: relative;
	}

	.sector-name {
		font-size: 0.58rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.95);
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
		letter-spacing: 0.02em;
	}

	.sector-symbol {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.48rem;
		color: rgba(255, 255, 255, 0.65);
		margin-top: 0.1rem;
	}

	.sector-change {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.58rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.95);
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
		margin-top: 0.2rem;
	}

	/* Richer green-to-red gradient palette */
	.up-3 {
		background: #006d35;
	}
	.up-2 {
		background: #0d8a45;
	}
	.up-1 {
		background: #1aa85a;
	}
	.up-0 {
		background: #27c470;
	}
	.down-0 {
		background: #b84040;
	}
	.down-1 {
		background: #9e2a2a;
	}
	.down-2 {
		background: #821818;
	}
	.down-3 {
		background: #660808;
	}
</style>
