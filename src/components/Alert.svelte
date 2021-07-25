<script>
    import { alert } from '../stores.js'
    import { onDestroy } from 'svelte'
  
    // let alertContent = ''
  
    // const unsubscribe = alert.subscribe(value => alertContent = value)
  
    // onDestroy(unsubscribe)
  </script>
  
  {#if $alert}
  <div on:click={() => $alert = ''}>
    <p>{ $alert }</p>
  </div>
  {/if}
  
  <style>
  div {
    position: fixed;
    cursor: pointer;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    margin-top: 1rem;
    right: 0;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    background-color: #565656;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.5rem 1.4rem;
    font-size: 1.5rem;
    z-index: 100;
    opacity: 95%;
  }
  div p {
    color: #fff;
  }
  div svg {
    height: 1.6rem;
    fill: currentColor;
    width: 1.4rem;
    margin-right: 0.5rem;
  }
  </style>