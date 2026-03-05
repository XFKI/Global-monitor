<script lang="ts">
	import { isRefreshing, lastRefresh, tr, toggleLang } from '$lib/stores';

	interface Props {
		onSettingsClick?: () => void;
	}

	let { onSettingsClick }: Props = $props();

	const lastRefreshText = $derived(
		$lastRefresh
			? `${$tr.header.lastUpdated} ${new Date($lastRefresh).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`
			: $tr.header.neverRefreshed
	);
</script>

<header class="header">
	<div class="header-left">
		<h1 class="logo">
			<span class="logo-mark">◈</span>
			{$tr.header.title}
		</h1>
	</div>

	<div class="header-center">
		<div class="refresh-status">
			{#if $isRefreshing}
				<span class="live-dot refreshing"></span>
				<span class="status-text loading">{$tr.header.refreshing}</span>
			{:else}
				<span class="live-dot"></span>
				<span class="status-text">{lastRefreshText}</span>
			{/if}
		</div>
	</div>

	<div class="header-right">
		<button class="header-btn lang-btn" onclick={toggleLang} title="Switch Language">
			<span class="btn-label">{$tr.header.langToggle}</span>
		</button>
		<button class="header-btn settings-btn" onclick={onSettingsClick} title={$tr.header.settings}>
			<span class="btn-icon">⚙</span>
			<span class="btn-label">{$tr.header.settings}</span>
		</button>
	</div>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		height: 44px;
		background: rgba(13, 23, 36, 0.95);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
		box-shadow: 0 1px 0 rgba(0, 207, 255, 0.06);
		position: sticky;
		top: 0;
		z-index: 100;
		gap: 1rem;
	}

	/* Subtle top accent line */
	.header::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			var(--accent) 40%,
			rgba(0, 207, 255, 0.4) 70%,
			transparent 100%
		);
	}

	.header-left {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.logo {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--text);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		text-transform: uppercase;
	}

	.logo-mark {
		color: var(--accent);
		font-size: 1rem;
		filter: drop-shadow(0 0 6px var(--accent-glow));
	}

	.header-center {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: center;
	}

	.refresh-status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.live-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--green);
		box-shadow: 0 0 6px var(--green);
		animation: pulse-glow 2.5s ease-in-out infinite;
		flex-shrink: 0;
	}

	.live-dot.refreshing {
		background: var(--accent);
		box-shadow: 0 0 6px var(--accent);
		animation: pulse-glow 0.6s ease-in-out infinite;
	}

	.status-text {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.6rem;
		color: var(--text-muted);
		letter-spacing: 0.04em;
		white-space: nowrap;
	}

	.status-text.loading {
		color: var(--accent);
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.header-btn {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		height: 28px;
		padding: 0 0.75rem;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 5px;
		color: var(--text-dim);
		cursor: pointer;
		transition:
			background 0.15s,
			border-color 0.15s,
			color 0.15s;
		font-size: 0.65rem;
		font-family: inherit;
		letter-spacing: 0.04em;
	}

	.header-btn:hover {
		background: var(--accent-dim);
		border-color: rgba(0, 207, 255, 0.4);
		color: var(--accent);
	}

	.lang-btn {
		font-weight: 700;
		min-width: 2.8rem;
		justify-content: center;
		letter-spacing: 0.06em;
	}

	.btn-icon {
		font-size: 0.8rem;
		line-height: 1;
	}

	.btn-label {
		display: none;
	}

	@media (min-width: 768px) {
		.btn-label {
			display: inline;
		}
	}

	@keyframes pulse-glow {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.35;
			transform: scale(0.7);
		}
	}
</style>
