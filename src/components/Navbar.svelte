<script lang="ts">
    import LinkIcon from './LinkIcon.svelte';
</script>

<nav>
    <LinkIcon
        id="home-icon"
        showText={false}
        displayText="Home"
        svgPath="/navigation/home.svg"
        link="/"
        alt="A basic house outline"
    />
    <!-- <a href="/about"> About Me </a> -->
    <LinkIcon
        id="strudel-icon"
        showText={false}
        displayText="Strudel (Music Coding)"
        svgPath="/navigation/strudel.svg"
        link="/strudel"
        alt="A computer with a music note on the screen"
    />
    <LinkIcon
        id="portfolio-icon"
        showText={false}
        displayText="Portfolio"
        svgPath="/navigation/portfolio.svg"
        link="/portfolio"
        alt="A very simple closed briefcase with a handle on top"
    />
    <LinkIcon
        id="gh-icon"
        showText={false}
        displayText="GitHub"
        svgPath="/navigation/github.svg"
        link="https://github.com/btylerh7"
        alt="The github logo"
        external={true}
    />
</nav>

<style>
    nav {
        position: sticky;
        bottom: 20px;
        padding: 1rem;
        display: flex;
        gap: 3em;
        justify-content: center;
        align-items: center;
    }
</style>
