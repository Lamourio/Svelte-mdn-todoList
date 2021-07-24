<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let todos ;
    $: completed = todos.length !== todos.filter(t => t.completed).length ;
    $: completedTodos = todos.filter(t => t.completed).length ;
    
    const checkAll = () => {
      dispatch('checkAll', completed)
    }

    const removeCompleted = () => dispatch('removeCompleted')

    
    
  </script>

<div class="btn-group">
    <button type="button" class="btn btn__primary"
      disabled={todos.length === 0} on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
    <button type="button" class="btn btn__primary"
      disabled={completedTodos === 0} on:click={removeCompleted}>Remove completed</button>
  </div>