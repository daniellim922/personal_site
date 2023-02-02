<script>
    export let photo;
</script>

<div class="hero-box">
    <img src={photo} alt="image_of_Daniel_Lim" width="auto" height="150px" />
    <div class="hero-text-box">
        <slot />
    </div>
</div>

<style>
    .hero-box {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .hero-text-box {
        margin: 0px 20px 0px 40px;
    }
</style>
