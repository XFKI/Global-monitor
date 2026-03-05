<script lang="ts">
	interface Props {
		text: string;
		variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
		size?: 'sm' | 'md';
	}

	let { text, variant = 'default', size = 'sm' }: Props = $props();
</script>

<span class="badge {variant} {size}">{text}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		border-radius: 20px;
		line-height: 1;
	}

	.sm {
		font-size: 0.5rem;
		padding: 0.1rem 0.4rem;
	}

	.md {
		font-size: 0.58rem;
		padding: 0.15rem 0.5rem;
	}

	.default {
		background: var(--surface-2, #132033);
		color: var(--text-dim);
		border: 1px solid var(--border);
	}

	.success {
		background: var(--green-dim);
		color: var(--green);
		border: 1px solid rgba(45, 206, 106, 0.25);
	}

	.warning {
		background: var(--yellow-dim);
		color: var(--yellow);
		border: 1px solid rgba(255, 186, 0, 0.25);
	}

	.danger {
		background: var(--red-dim);
		color: var(--red);
		border: 1px solid rgba(248, 81, 73, 0.25);
	}

	.info {
		background: var(--accent-dim);
		color: var(--accent);
		border: 1px solid rgba(0, 207, 255, 0.25);
	}
</style>
