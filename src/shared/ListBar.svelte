<script>
    export let title, lists;
</script>

<div>
    <h3>{title}:</h3>
    <ul>
        {#each lists as list}
            <li>{list}</li>
        {/each}
    </ul>
</div>

<style>
    h3 {
        font-size: 20px;
        margin-bottom: 5px;
    }
    ul {
        margin-top: 0;
        padding-left: 15px;
    }
</style>
