<script lang="ts">
	interface Props {
		message: string;
		retry?: () => void;
	}

	let { message, retry }: Props = $props();
</script>

<div class="error-container">
	<div class="error-icon">⚠</div>
	<div class="error-message">{message}</div>
	{#if retry}
		<button class="retry-btn" onclick={retry}>Retry</button>
	{/if}
</div>

<style>
	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1.5rem 1rem;
		gap: 0.5rem;
		text-align: center;
	}

	.error-icon {
		font-size: 1.2rem;
		opacity: 0.7;
		color: var(--red);
	}

	.error-message {
		font-size: 0.68rem;
		color: var(--red);
		line-height: 1.4;
	}

	.retry-btn {
		font-size: 0.6rem;
		padding: 0.3rem 0.8rem;
		background: var(--red-dim);
		border: 1px solid rgba(248, 81, 73, 0.3);
		border-radius: 20px;
		color: var(--red);
		cursor: pointer;
		transition:
			background 0.15s,
			border-color 0.15s;
		font-family: inherit;
		letter-spacing: 0.04em;
	}

	.retry-btn:hover {
		background: rgba(248, 81, 73, 0.2);
		border-color: rgba(248, 81, 73, 0.5);
	}
</style>
