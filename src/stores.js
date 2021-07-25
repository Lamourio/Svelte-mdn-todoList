import { writable } from "svelte/store";
export const alert = writable('welcome to the To-Do list app!');
export const todos = writable([]);