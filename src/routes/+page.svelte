<script>
    import Experience from "../components/Experience.svelte";
    import AppBar from "../shared/AppBar.svelte";
    import Draggable from "../shared/Draggable.svelte";

    import { pages, experiences } from "../store/stores";
</script>

<AppBar />
{#each $pages as page, i}
    <Draggable {page}>
        <svelte:component this={page.component} />
    </Draggable>
{/each}

{#each $experiences as experience}
    {#if experience.visible}
        <Draggable
            header={experience.title}
            left="1000"
            top="10"
            width="750"
            height="650"
            visible={$pages[0].visible}
        >
            <Experience {experience} />
        </Draggable>
    {/if}
{/each}
