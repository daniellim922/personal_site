<script>
    export let project;

    import Hero from "../shared/Hero.svelte";
    import ListBar from "../shared/ListBar.svelte";

    import uowrbs from "../public/assets/video/UOWRBS.mp4";
</script>

<Hero photo={project.logo}>
    <h2>{project.fullTitle}</h2>
    <ListBar title="Purpose" lists={project.purpose} />
</Hero>
<div class="video-box">
    <video controls width="600" muted autoplay="true">
        <track default kind="captions" srclang="en" src={uowrbs} />
        <source src={uowrbs} type="video/mp4" />
    </video>
</div>

<style>
    .video-box {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    h2 {
        font-size: 35px;
        margin-bottom: 20px;
    }
</style>
