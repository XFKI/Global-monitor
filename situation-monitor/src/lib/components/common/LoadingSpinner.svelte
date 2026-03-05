<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		message?: string;
	}

	let { size = 'md', message = '' }: Props = $props();
</script>

<div class="loading-container {size}">
	<div class="spinner"></div>
	{#if message}
		<div class="message">{message}</div>
	{/if}
</div>

<style>
	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1.5rem 1rem;
		gap: 0.75rem;
	}

	.spinner {
		border-radius: 50%;
		border-style: solid;
		border-color: rgba(0, 207, 255, 0.15);
		border-top-color: var(--accent);
		animation: spin 0.75s linear infinite;
		box-shadow: 0 0 8px var(--accent-glow);
	}

	.sm .spinner {
		width: 16px;
		height: 16px;
		border-width: 1.5px;
	}

	.md .spinner {
		width: 22px;
		height: 22px;
		border-width: 2px;
	}

	.lg .spinner {
		width: 30px;
		height: 30px;
		border-width: 2.5px;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.message {
		font-size: 0.62rem;
		color: var(--text-muted);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	.sm .message {
		font-size: 0.55rem;
	}

	.lg .message {
		font-size: 0.7rem;
	}
</style>
