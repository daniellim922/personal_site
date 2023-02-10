<script>
    import AppBar from "../components/AppBar.svelte";
    import Draggable from "../shared/Draggable.svelte";

    import { pages, experiences, projects } from "../store/stores";
</script>

<AppBar />
{#each $pages as page, i}
    <Draggable {page}>
        <svelte:component this={page.component} title={page.title} />
    </Draggable>
{/each}

{#each $experiences as experience}
    <Draggable page={experience.page}>
        <svelte:component this={experience.page.component} {experience} />
    </Draggable>
{/each}

{#each $projects as project}
    <Draggable page={project.page}>
        <svelte:component this={project.page.component} {project} />
    </Draggable>
{/each}
