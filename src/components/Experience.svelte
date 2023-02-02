<script>
    export let experience;
    import gsabLogo from "../public/assets/profile/gsabLogo.png";

    import Hero from "../shared/Hero.svelte";
    import ListBar from "../shared/ListBar.svelte";
</script>

<Hero photo={gsabLogo}>
    <h2 style="font-size: 35px;">{experience.fullTitle}</h2>
    <table>
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
<hr />
<aside>
    <h2 style="font-size: 35px;">Projects @ {experience.title}</h2>
    {#each experience.projects as project}
        <ListBar title={project.fullTitle} lists={project.purpose} />
    {/each}
</aside>

<style>
</style>
