<script>
    export let title;
    import disk from "../public/assets/icons/disk.png";

    import { experiences, projects, zState } from "../store/stores";

    const openExpFolder = (index) => {
        $experiences[index].page.visible = true;
        $experiences[index].page.coordinates.zIndex = $zState++;
    };

    const openProjFolder = (index) => {
        $projects[index].page.visible = true;
        $projects[index].page.coordinates.zIndex = $zState++;
    };
</script>

<div class="folder-box">
    {#if title === "Experience"}
        {#each $experiences as experience, expIndex}
            <div class="disk-box" on:mouseup={() => openExpFolder(expIndex)}>
                <img src={disk} alt="icon_of_a_floppy_disk" />
                <p>{experience.page.title}</p>
            </div>
        {/each}
    {:else if title === "Project"}
        {#each $projects as project, projIndex}
            <div class="disk-box" on:mouseup={() => openProjFolder(projIndex)}>
                <img src={disk} alt="icon_of_a_floppy_disk" />
                <p>{project.page.title}</p>
            </div>
        {/each}
    {/if}
</div>

<style>
    .folder-box {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
    }
    .disk-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
    }
    .disk-box:hover {
        background-color: #f5f5f5;
    }

    .disk-box p {
        margin: 0;
    }
    .disk-box img {
        width: 80px;
    }
</style>
