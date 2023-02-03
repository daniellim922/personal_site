import { writable } from "svelte/store";
import { experiencesDB } from "./experiencesDB";
import { projectsDB } from "./projectsDB";
import { pageDB } from "./pageDB";

export let experiences = writable(experiencesDB);
export let projects = writable(projectsDB);

export let pages = writable(pageDB);

export let zState = writable(1);
