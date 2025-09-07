<script>
    export let photo;
</script>

<div class="hero-box">
    <img src={photo} alt="image_of_Daniel_Lim" width="auto" />
    <div class="hero-text-box">
        <slot />
    </div>
</div>

<style>
    @media screen and (max-width: 700px) {
        img {
            height: 100px !important;
            width: auto !important;
        }
        .hero-text-box {
            margin: 0px 0px 0px 20px !important;
        }
    }
    img {
        height: 150px;
    }
    .hero-box {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .hero-text-box {
        margin: 0px 10px 10px 40px;
    }
</style>
