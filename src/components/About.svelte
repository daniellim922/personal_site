<script>
    import daniel from "../public/assets/profile/daniel.png";
    import face from "../public/assets/icons/face.png";
    import Hero from "../shared/Hero.svelte";
    import ListBar from "../shared/ListBar.svelte";

    const hobbies = ["Coding", "Gymming", "Reading"];
    const skills = [
        "HTML,CSS,JS",
        "TS",
        "Jest",
        "NodeJS",
        "Mongoose",
        "Svelte",
    ];
</script>

<div>
    <Hero photo={daniel}>
        <h2>Daniel Lim</h2>
        <p>
            I take pride in writing maintainable and testable code. I work best
            under pressure and fast pace environments. I love reading and
            learning new skills.
        </p>
    </Hero>
    <div class="hero-box">
        <div>
            <div>
                <h3>Education:</h3>
                <ul style="list-style-type: none; padding:0">
                    <li>SIM University Of Wollongong</li>
                    <li>2022 - Present (Expected 2025)</li>
                    <li>BSc. (Hons.) in Computer Science</li>
                    <li>Digital Systems Security</li>
                </ul>
            </div>
            <ListBar title={"Hobbies"} lists={hobbies} />
            <ListBar title={"Skills"} lists={skills} />
        </div>
        <div class="hero-img-box">
            <img src={face} class="hero-img" alt="icon_of_a_face" />
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 700px) {
        h2 {
            font-size: 25px !important;
            margin-bottom: 0px !important;
        }
        p {
            font-size: 12px !important;
            margin-top: 8px !important;
        }
        .hero-img {
            width: auto;
            height: 120px !important;
        }
        li {
            font-size: 12px;
        }
        h3 {
            font-size: 20px !important;
            margin-bottom: 0 !important;
        }
    }
    h2 {
        font-size: 35px;
    }
    .hero-box {
        display: flex;
        justify-content: space-around;
    }
    .hero-img-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
    .hero-img {
        width: auto;
        height: 200px;
    }
    h3 {
        font-size: 25px;
        margin-bottom: 5px;
    }
    ul {
        margin-top: 0;
        padding-left: 15px;
    }
</style>
