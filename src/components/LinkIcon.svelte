<script lang="ts">
    interface Props {
        displayText: string;
        svgPath: string;
        id: string;
        link: string;
        alt?: string;
        width?: string;
        showText?: boolean;
        external?: boolean;
    }
    const { displayText, svgPath, id, link, width, showText, alt, external }: Props = $props();
</script>

<a href={link} title={displayText} target={external == true ? '_blank' : '_self'} class="icon" {id}>
    <img src={svgPath} alt={alt || displayText} width={width || '40'} height={width || '40'} />
    {#if showText}
        <p>{displayText}</p>
    {/if}
</a>

<style>
    .icon {
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        max-width: 150px;
        text-align: center;
        /* padding: 1rem; */
        transition: transform 100ms ease-in;
        img {
            margin: auto;
        }
        p {
            margin-block: 0;
        }
        &:hover {
            transform: scale(1.2);
        }
    }
</style>
