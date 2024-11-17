<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from '$lib/components/toggle.svelte';
</script>

<nav>
	<a href={config.url} class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href={config.url + '/about'}>About</a>
		</li>
		<li>
			<a href={config.url + '/contact'}>Contact</a>
		</li>
		<li>
			<a href={config.url + '/rss.xml'} target="_blank">RSS</a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);

		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}

		.links {
			margin-block: var(--size-7);

			@media (min-width: 768px) {
				display: flex;
				gap: var(--size-7);
				margin-block: 0;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
