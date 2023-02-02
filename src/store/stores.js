import { writable } from "svelte/store";
import { experiencesDB } from "./experiencesDB";

import About from "../components/About.svelte";
import Contact from "../components/Contact.svelte";
import Readme from "../components/Readme.svelte";

import Folders from "../shared/Folders.svelte";

export const experiences = writable(experiencesDB);
export const pages = writable([
    {
        title: "README.md",
        coordinates: {
            top: 90,
            left: 50,
            width: 620,
            height: 250,
        },
        visible: true,
        zIndex: 0,
        component: Readme,
    },
    {
        title: "About",
        coordinates: {
            top: 150,
            left: 200,
            width: 600,
            height: 620,
        },
        visible: false,
        zIndex: 0,
        component: About,
    },
    {
        title: "Contact",
        coordinates: {
            top: 210,
            left: 350,
            width: 450,
            height: 250,
        },
        visible: false,
        zIndex: 0,
        component: Contact,
    },
    {
        title: "Experience",
        coordinates: {
            top: 300,
            left: 900,
            width: 650,
            height: 220,
        },
        visible: false,
        zIndex: 0,
        component: Folders,
    },
]);
