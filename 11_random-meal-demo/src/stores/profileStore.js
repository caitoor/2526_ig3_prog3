import { writable } from "svelte/store";
const STORAGE_KEY = "random_meal_profile_name";

const name = writable(loadName());

function loadName() {
    return localStorage.getItem(STORAGE_KEY) || "Guest";
}

export function setName(newName) {
    name.set(newName);
    localStorage.setItem(STORAGE_KEY, newName);
}

export function getName() {
    return name;
}

export { name };