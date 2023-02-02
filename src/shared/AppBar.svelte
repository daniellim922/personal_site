<script>
    import { onMount } from "svelte";
    import watch from "../public/assets/icons/watch.png";
    import pc from "../public/assets/icons/pc.png";

    import { pages } from "../store/stores";

    let time;
    onMount(() => {
        time = new Date().toLocaleTimeString();
    });
    setInterval(() => {
        time = new Date().toLocaleTimeString();
    }, 1000);

    const openPage = (i) => {
        $pages[i].visible = true;
    };
</script>

<header class="header-box">
    <img
        src={pc}
        class="pc"
        alt="icon_of_a_macintosh"
        on:click={() => openPage(0)}
    />
    <ul class="header-ol">
        {#each $pages as page, i}
            {#if i != 0}
                <li on:click={() => openPage(i)}>{page.title}</li>
            {/if}
        {/each}
    </ul>
    <nav class="nav-box">
        <span class="time">{time}</span>
        <img src={watch} alt="icon_of_a_watch" class="watch" />
    </nav>
</header>

<style>
    .nav-box {
        display: flex;
        align-items: center;
    }
    .time {
        font-size: 20px;
        margin-right: 10px;
    }
    .pc {
        width: auto;
        height: 35px;
        margin-right: 10px;
    }
    .watch {
        width: 20px;
        height: auto;
    }
    .header-box {
        background-color: white;
        user-select: none;
        display: flex;
        align-items: center;
        padding: 0 40px 0 40px;
    }
    .header-ol {
        display: flex;
        padding: 0;
        margin: 0 0 0 0;
        list-style-type: none;
        font-size: 22px;
        width: 100%;
    }
    li {
        padding: 20px;
    }
    li:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
    li:active {
        padding: 12px;
        margin: 3px;
    }
    img {
        cursor: pointer;
    }
</style>
