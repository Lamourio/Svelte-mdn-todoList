<script>
    import Alert from "./components/Alert.svelte";
    import Todos from "./components/Todos.svelte";
	import { todos } from './stores.js'
</script>

<Alert />
<Todos bind:todos={$todos} />
