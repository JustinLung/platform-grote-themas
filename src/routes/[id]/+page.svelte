<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import Video from '$lib/components/Video.svelte';
    import PaperclipIcon from '$lib/icons/paperclip.svg?component';
    export let email: string = "naam.achternaam@hva.nl";
    export let faculteit: string = "FDMCI"
    export let opleiding: string = "CMD"
    export let materiaal: string = "materiaal"
    export let description: string = "hier komt een korste omschrijving over de werkvorm of het thema. Er kan van alles staan maar voor nu staat hier een random tekst die eigenlijk nergens over staat maar er puur voor dient om content op te vullen. Zo lijkt het toch nog wat en is het design mooier om naar te loeren."
</script>

<section>
    <div>
        <h3>Contactpersoon</h3>
        <span>{email}</span>
        <h3>Faculteit/opleiding</h3>
        <span>{faculteit} - {opleiding}</span>
        <h3>Download materialen</h3>
        <a href={materiaal} class="material"><PaperclipIcon/>{materiaal}</a>
        <h3>Korte beschrijving</h3>
        <p>{description}</p>
        <div>
            <Tag title="Ik" color="var(--color-hva-light-blue)" link="/" />
            <Tag title="Persoonlijke Intresses" color="var(--color-hva-red)" link="/" />
            <Tag title="Duurzaamheid" color="var(--color-hva-teal)" link="/" />
        </div>
    </div>
    <Video/>
</section>

<style>
    section {
        padding: 2rem;
        display: flex;
        justify-content: space-between;
    }

    .material {
        display: flex;
        align-items: center; 
        gap: .5rem;
    }

    p {
        max-width: 30rem;
    }

    @media(max-width: 55rem) {
        section {
            flex-direction: column;
            gap: 2rem;
        }
    }
</style>