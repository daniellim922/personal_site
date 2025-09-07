<script>
    export let experience;

    import Hero from "../shared/Hero.svelte";
    import ListBar from "../shared/ListBar.svelte";
    import mail from "../public/assets/profile/accenture.png";

</script>

<Hero photo={experience.logo}>
    <h2>{experience.fullTitle}</h2>
    <table width="100%">
        <tr>
            <td>Duration:</td>
            <td>{experience.duration}</td>
        </tr>
        <tr>
            <td>Department:</td>
            <td>{experience.department}</td>
        </tr>
        <tr>
            <td>Role:</td>
            <td>{experience.role}</td>
        </tr>
    </table>
</Hero>
<ListBar title="Responsibilites" lists={experience.responsibilities} />
<ListBar title="Contributions" lists={experience.contributions} />

{#if experience.projects}
    <hr />
    <aside>
        <h2>Projects @ {experience.page.title}</h2>
        {#each experience.projects as project}
            <ListBar title={project.fullTitle} lists={project.purpose} />
        {/each}
    </aside>
{/if}

<style>
    @media screen and (max-width: 700px) {
        h2 {
            font-size: 25px !important;
            margin-bottom: 5px !important;
        }
        td {
            font-size: 12px;
        }
    }
    h2 {
        font-size: 35px;
        margin-bottom: 20px;
    }
    hr {
        margin: 30px 0 0 0;
    }
</style>
