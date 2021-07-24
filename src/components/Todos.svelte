<script>
    import FilterButton from "./FilterButton.svelte";
    import Todo from "./Todo.svelte";
    import NewTodo from "./NewTodo.svelte"
    import MoreActions from "./MoreActions.svelte";
    import TodosStatus from './TodosStatus.svelte'
    export let todos = [];
    let newTodoName = "";
    $: newTodoId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1
    function removeTodo(todo) {
        todos = todos.filter((t) => t.id !== todo.id);
        console.log(todosStatus) ;
        todosStatus.focus()
    }
    function updateTodo(todo) {
        const i = todos.findIndex((t) => t.id === todo.id);
        todos[i] = { ...todos[i], ...todo };
    }
    function addTodo(newTodoName) {
        todos = [
            ...todos,
            { id: newTodoId, name: newTodoName, completed: false },
        ];
        newTodoName = "";
    }

    let filter = "all";
    const filterTodos = (filter, todos) =>
        filter === "active"
            ? todos.filter((t) => !t.completed)
            : filter === "completed"
            ? todos.filter((t) => t.completed)
            : todos;
    const checkAllTodos = (completed) =>
        todos = todos.map((t,i) => ({...t,completed} )) ;

    const removeCompletedTodos = () =>
        (todos = todos.filter((t) => !t.completed));
    let todosStatus ;
</script>

<!-- Todos.svelte -->
<div class="todoapp stack-large">
    <!-- NewTodo -->
    <NewTodo autofocus on:addTodo={e => addTodo(e.detail)} />

    <!-- Filter -->

    <!-- ---------first solution---------  -->
    <!-- <FilterButton {filter} onclick={(clicked) => filter = clicked}/> -->

    <!-- ---------seconde solution---------  -->
    <FilterButton bind:filter />

    <!-- TodosStatus -->
    <TodosStatus bind:this={todosStatus} {todos} />

    <!-- Todos -->
    <ul
        role="list"
        class="todo-list stack-large"
        aria-labelledby="list-heading"
    >
        {#each filterTodos(filter, todos) as todo (todo.id)}
            <li class="todo">
                <Todo
                    {todo}
                    on:update={(e) => updateTodo(e.detail)}
                    on:remove={(e) => removeTodo(e.detail)}
                />
            </li>
        {:else}
            <li>Nothing to do here!</li>
        {/each}
    </ul>

    <hr />

    <!-- MoreActions -->
    <MoreActions
    {todos}
    on:checkAll={e => checkAllTodos(e.detail)}
    on:removeCompleted={removeCompletedTodos}
  />
</div>
