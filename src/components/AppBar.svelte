<script>
    import { onMount } from "svelte";
    import watch from "../public/assets/icons/watch.png";
    import pc from "../public/assets/icons/pc.png";

    import { pages, zState } from "../store/stores";

    let time;
    onMount(() => {
        time = new Date().toLocaleTimeString();
    });
    setInterval(() => {
        time = new Date().toLocaleTimeString();
    }, 1000);

    const openPage = (i) => {
        $pages[i].visible = true;
        moveZIndexUp(i);
    };

    const moveZIndexUp = (i) => {
        $zState++;
        $pages[i].coordinates.zIndex = $zState;
    };
</script>

<header class="header-box">
    <img
        src={pc}
        class="pc"
        alt="icon_of_a_macintosh"
        on:mousedown={() => openPage(0)}
    />
    <ul class="header-ol">
        {#each $pages as page, i}
            {#if i != 0}
                <li on:mousedown={() => openPage(i)}>{page.title}</li>
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
        background-color: #f8fafc;
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
        color: #f8fafc;
        cursor: pointer;
    }
    li:active {
        padding: 15px;
        margin: 5px;
    }
    img {
        cursor: pointer;
    }
</style>
