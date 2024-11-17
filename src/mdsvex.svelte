<script lang="ts" module>
	import img from '$lib/components/img.svelte'
	export { img }
</script>

<script lang="ts">
	let props = $props()
</script>

{@render props.children?.()}
