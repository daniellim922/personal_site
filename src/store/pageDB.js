import About from "../components/About.svelte";
import Contact from "../components/Contact.svelte";
import Readme from "../components/Readme.svelte";

import Folders from "../shared/Folders.svelte";

export const pageDB = [
    {
        title: "README.md",
        coordinates: {
            top: 100,
            left: 50,
            width: 620,
            height: 250,
            zIndex: 0,
        },
        visible: true,
        component: Readme,
    },
    {
        title: "About",
        coordinates: {
            top: 160,
            left: 700,
            width: 600,
            height: 620,
            zIndex: 0,
        },
        visible: false,
        component: About,
    },
    {
        title: "Contact",
        coordinates: {
            top: 400,
            left: 120,
            width: 450,
            height: 250,
            zIndex: 0,
        },
        visible: false,
        component: Contact,
    },
    {
        title: "Experience",
        coordinates: {
            top: 100,
            left: 1350,
            width: 450,
            height: 220,
            zIndex: 0,
        },
        visible: false,
        component: Folders,
        type: "Folders",
    },
    {
        title: "Project",
        coordinates: {
            top: 500,
            left: 1350,
            width: 450,
            height: 220,
            zIndex: 0,
        },
        visible: false,
        component: Folders,
        type: "Folders",
    },
];
