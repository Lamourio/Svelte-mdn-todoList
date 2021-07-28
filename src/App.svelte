<script lang="ts">
    import Alert from "./components/Alert.svelte";
    import Todos from "./components/Todos.svelte";
	import { todos } from './stores'
</script>

<Alert />
<Todos bind:todos={$todos} />
