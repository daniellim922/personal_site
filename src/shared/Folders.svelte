<script>
    import disk from "../public/assets/icons/disk.png";

    import { experiences } from "../store/stores";

    const alternateVisibleState = (folderIndex) => {
        $experiences[folderIndex].visible = true;
    };
</script>

<div class="folder-box">
    {#each $experiences as folder, folderIndex}
        <div
            class="disk-box"
            on:click={() => alternateVisibleState(folderIndex)}
        >
            <img src={disk} alt="icon_of_a_floppy_disk" />
            <p>{folder.title}</p>
        </div>
    {/each}
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
