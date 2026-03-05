<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PanelId } from '$lib/config';
	import { tr } from '$lib/stores';

	interface Props {
		id: PanelId;
		title: string;
		count?: number | string | null;
		status?: string;
		statusClass?: string;
		loading?: boolean;
		error?: string | null;
		draggable?: boolean;
		collapsible?: boolean;
		collapsed?: boolean;
		onCollapse?: () => void;
		header?: Snippet;
		actions?: Snippet;
		children: Snippet;
	}

	let {
		id,
		title,
		count = null,
		status = '',
		statusClass = '',
		loading = false,
		error = null,
		draggable = true,
		collapsible = false,
		collapsed = false,
		onCollapse,
		header,
		actions,
		children
	}: Props = $props();

	function handleCollapse() {
		if (collapsible && onCollapse) {
			onCollapse();
		}
	}

	// Use translated panel title if available, otherwise fallback to prop
	const displayTitle = $derived(($tr.panels as Record<string, string>)[id] ?? title);
</script>

<div class="panel" class:draggable class:collapsed data-panel-id={id}>
	<div class="panel-header">
		<div class="panel-title-row">
			<h3 class="panel-title">{displayTitle}</h3>
			{#if count !== null}
				<span class="panel-count">{count}</span>
			{/if}
			{#if status}
				<span class="panel-status {statusClass}">{status}</span>
			{/if}
			{#if loading}
				<span class="panel-loading"></span>
			{/if}
		</div>

		{#if header}
			{@render header()}
		{/if}

		<div class="panel-actions">
			{#if actions}
				{@render actions()}
			{/if}
			{#if collapsible}
				<button class="panel-collapse-btn" onclick={handleCollapse} aria-label="Toggle panel">
					{collapsed ? '▼' : '▲'}
				</button>
			{/if}
		</div>
	</div>

	<div class="panel-content" class:hidden={collapsed}>
		{#if error}
			<div class="error-msg">{error}</div>
		{:else if loading}
			<div class="loading-msg">{$tr.common.loading}</div>
		{:else}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	.panel {
		background: var(--surface);
		border: 1px solid var(--border);
		border-left: 2px solid var(--accent);
		border-radius: 0 6px 6px 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
		animation: fade-in 0.3s ease both;
	}

	.panel:hover {
		border-color: var(--border-light);
		border-left-color: var(--accent);
		box-shadow:
			0 0 0 1px rgba(0, 207, 255, 0.06),
			0 4px 16px rgba(0, 0, 0, 0.3);
	}

	.panel.draggable {
		cursor: grab;
	}

	.panel.draggable:active {
		cursor: grabbing;
	}

	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.75rem;
		background: linear-gradient(90deg, rgba(0, 207, 255, 0.04) 0%, var(--surface) 60%);
		border-bottom: 1px solid var(--border);
		min-height: 2.25rem;
	}

	.panel-title-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.panel-title {
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-dim);
		margin: 0;
	}

	.panel-count {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.6rem;
		font-weight: 700;
		color: var(--accent);
		background: var(--accent-dim);
		border: 1px solid rgba(0, 207, 255, 0.2);
		padding: 0.05rem 0.45rem;
		border-radius: 20px;
		min-width: 1.4rem;
		text-align: center;
	}

	.panel-status {
		font-size: 0.55rem;
		font-weight: 700;
		padding: 0.1rem 0.45rem;
		border-radius: 20px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.panel-status.monitoring {
		color: var(--text-dim);
		background: var(--surface-2, #132033);
		border: 1px solid var(--border);
	}

	.panel-status.elevated {
		color: var(--yellow);
		background: var(--yellow-dim);
		border: 1px solid rgba(255, 186, 0, 0.25);
	}

	.panel-status.critical {
		color: var(--red);
		background: var(--red-dim);
		border: 1px solid rgba(248, 81, 73, 0.25);
	}

	.panel-loading {
		width: 10px;
		height: 10px;
		border: 1.5px solid rgba(0, 207, 255, 0.2);
		border-top-color: var(--accent);
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
		filter: drop-shadow(0 0 3px var(--accent-glow));
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.panel-actions {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.panel-collapse-btn {
		background: none;
		border: none;
		color: var(--text-muted);
		cursor: pointer;
		padding: 0.2rem 0.3rem;
		font-size: 0.5rem;
		line-height: 1;
		border-radius: 3px;
		transition:
			color 0.15s,
			background 0.15s;
	}

	.panel-collapse-btn:hover {
		color: var(--accent);
		background: var(--accent-dim);
	}

	.panel-content {
		flex: 1;
		overflow-y: auto;
		padding: 0.6rem 0.75rem;
	}

	.panel-content.hidden {
		display: none;
	}

	.error-msg {
		color: var(--danger);
		text-align: center;
		padding: 1.5rem 1rem;
		font-size: 0.7rem;
	}

	.loading-msg {
		color: var(--text-muted);
		text-align: center;
		padding: 1.5rem 1rem;
		font-size: 0.7rem;
		letter-spacing: 0.05em;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
