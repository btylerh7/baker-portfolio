<script lang="ts">
    const { url, children } = $props();
    import LinkIcon from './LinkIcon.svelte';
</script>

{#if url == '/'}
    {@render children?.()}
{:else}
    <div class="main-wrapper">
        <nav>
            <a href="/" class={url == '/' ? 'active' : ''}> Home </a>
            <a href="/about" class={url.startsWith('/about') ? 'active' : ''}> About Me </a>
            <a href="/portfolio" class={url.startsWith('/portfolio') ? 'active' : ''}>
                Portfolio
            </a>
            <LinkIcon
                id="gh"
                showText={false}
                displayText="GitHub"
                svgPath="/github.svg"
                link="https://github.com/btylerh7"
            />
        </nav>
        {@render children?.()}
    </div>
{/if}
