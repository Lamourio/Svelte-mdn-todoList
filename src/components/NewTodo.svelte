<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte'
import { selectOnFocus } from '../actions';
    const dispatch = createEventDispatcher()
    let name = ''
    let nameEl : HTMLElement ;                  // reference to the name input DOM node
    export let autofocus:boolean  = false ;
    const addTodo = () => {
      dispatch('addTodo', name)
      name = ''
      nameEl.focus()            // give focus to the name input
    }
  
    const onCancel = () => {
      name = ''
      nameEl.focus()            // give focus to the name input
    }
    onMount(() => {autofocus && nameEl.focus()})
  </script>
  
  <form on:submit|preventDefault={addTodo} on:keydown={e => e.key === 'Escape' && onCancel()}>
    <h2 class="label-wrapper">
      <label for="todo-0" class="label__lg">What needs to be done?</label>
    </h2>
    <input use:selectOnFocus bind:value={name} bind:this={nameEl} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
    <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
  </form>