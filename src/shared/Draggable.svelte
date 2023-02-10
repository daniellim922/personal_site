<script>
    export let page;

    const header = page.title;
    $: visible = page.visible;
    let { width, height, top, left } = page.coordinates;

    const hamburgers = [1, 2, 3, 4, 5, 6];

    let moving = false;
    const start = () => {
        moving = true;
    };
    const stop = () => {
        moving = false;
    };
    const move = (e) => {
        if (moving) {
            let intLeft = parseInt(left);
            let intTop = parseInt(top);

            intLeft += e.movementX;
            intTop += e.movementY;

            left = intLeft;
            top = intTop;

            if (top <= 65) {
                top = 65;
            }
            if (left <= 0 + 2) {
                left = 2;
            }

            if (left + folderWidth + 5 >= browserWidth) {
                left = browserWidth - folderWidth - 5;
            }
            if (top + folderHeight + 5 >= browserHeight) {
                top = browserHeight - folderHeight - 5;
            }
        }
    };
    let browserWidth;
    let browserHeight;

    let folderHeight;
    let folderWidth;

    let mainHeight;

    let overflow = false;
    $: if (height < mainHeight) {
        overflow = true;
    }
    // make height shorter for smaller screen
    $: if (browserHeight <= 1180 && height > 350) {
        height = 350;
    } else {
        // height = page.coordinates.height;
    }

    $: if (browserWidth >= 700) {
        width = page.coordinates.width;
    }
    $: if (browserWidth <= 700 && browserWidth >= 400) {
        width = 400;
    }
    $: if (browserWidth <= 400) {
        width = 370;
    }

    setInterval(() => {
        if (left + folderWidth >= browserWidth) {
            left = left - 3;
        }
        if (top + folderHeight >= browserHeight) {
            top = top - 3;
        }
    }, 1);

    const closePage = () => {
        page.visible = false;
    };

    import { zState } from "../store/stores";
    const moveZIndexUp = () => {
        $zState++;
        page.coordinates.zIndex = $zState;
    };
</script>

{#if visible}
    <section
        class="section-box"
        bind:clientHeight={folderHeight}
        bind:clientWidth={folderWidth}
        style="left:{left}px; top:{top}px; width:{width}px; height:{height}px; z-index:{page
            .coordinates.zIndex}"
        on:mousedown={moveZIndexUp}
    >
        <header on:mousedown={start}>
            <div>
                {#each hamburgers as hamburger}
                    <div class="hamburger" style="width: 15px;" />
                {/each}
            </div>
            <div class="cross-box" on:mouseup={closePage}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    />
                </svg>
            </div>
            <div class="title-box">
                <div style="width: 100%;">
                    {#each hamburgers as hamburger}
                        <div class="hamburger" />
                    {/each}
                </div>
                <span class="title">
                    {header}
                </span>
                <div style="width: 100%;">
                    {#each hamburgers as hamburger}
                        <div class="hamburger" />
                    {/each}
                </div>
            </div>
        </header>
        <main class:overflow bind:clientHeight={mainHeight} class="main-box">
            <slot />
        </main>
    </section>
{/if}
<svelte:window
    on:mouseup={stop}
    on:mousemove={move}
    bind:innerWidth={browserWidth}
    bind:innerHeight={browserHeight}
/>

<style>
    @media screen and (max-width: 700px) {
        .main-box {
            padding: 15px 15px 15px 15px;
        }
    }

    .hamburger {
        height: 2px;
        background-color: black;
        margin: 3px 0;
    }
    .cross-box {
        /* border: solid 2px; */
        outline: solid 2px;
        width: 23.5px;
        height: 23.5px;
        margin: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .cross-box:hover {
        background-color: #f5f5f5;
    }
    .title-box {
        display: flex;
        width: 100%;
    }
    .title {
        margin: 0px 20px 0px 20px;
        font-size: 30px;
    }
    .section-box {
        background-color: #f8fafc;
        position: absolute;
        user-select: none;
        outline: solid 3px;

        border-right: solid;
        border-right-width: medium;

        border-bottom: solid;
        border-bottom-width: medium;

        display: flex;
        flex-direction: column;
    }
    header {
        cursor: grab;
        border-bottom: solid 3px;
        box-shadow: 0px 0px 3px black;

        display: flex;
        align-items: center;
        padding: 5px;
    }
    .main-box {
        padding: 15px 30px 15px 30px;
    }
    .overflow {
        overflow-y: scroll;
    }
</style>
