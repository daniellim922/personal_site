<script>
    export let project;

    import Hero from "../shared/Hero.svelte";
    import ListBar from "../shared/ListBar.svelte";

    import uowrbs from "../public/assets/video/UOWRBS.mp4";
    let vidboxWidth;
</script>

<Hero photo={project.logo}>
    <h2>{project.fullTitle}</h2>
    <ListBar title="Purpose" lists={project.purpose} />
</Hero>
<div class="video">
    <div class="video-box" bind:clientWidth={vidboxWidth}>
        <video controls width={vidboxWidth} muted autoplay="true">
            <track default kind="captions" srclang="en" src={uowrbs} />
            <source src={uowrbs} type="video/mp4" />
        </video>
    </div>
</div>

<style>
    @media screen and (max-width: 700px) {
        h2 {
            font-size: 25px !important;
            margin-bottom: 5px !important;
        }
        .video-box {
            margin-top: 0px !important;
            margin-bottom: 0px !important;
            width: 300px !important;
        }
        .video {
            display: flex;
            justify-content: center;
        }
    }
    .video-box {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 675px;
    }
    h2 {
        font-size: 35px;
        margin-bottom: 20px;
    }
</style>
